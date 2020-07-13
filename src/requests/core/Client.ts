import fetch from 'isomorphic-unfetch'
import { stringify } from 'query-string'
import { changeKeyFormat } from '~/utils/form'
import { isServer } from '~/utils/device'
import { AnyObject } from '~/types'
import Endpoint from './Endpoint'
import Result from './Result'

type Headers = { [key: string]: any }

type Config = Partial<Client> & Required<Pick<Client, 'browserBaseURL'>>

class Client {
  browserBaseURL: string
  serverBaseURL?: string
  defaultHeaders?: Headers
  sendDataFormat?: 'camel' | 'snake'
  getDataFormat?: 'camel' | 'snake'
  extension?: string
  validate = (res: Response): boolean => {
    return res.status >= 200 && res.status < 400
  }

  constructor({ browserBaseURL, ...rest }: Config) {
    if (isServer && !rest.serverBaseURL) {
      throw new Error('you must set serverBaseURL')
    }

    this.browserBaseURL = browserBaseURL
    Object.assign(this, rest)
  }

  public readonly mainResponseGetter = (
    response: Response,
    formatter: (res: AnyObject) => any,
  ): any => {
    return formatter(response)
  }

  public readonly metaResponseGetter = (
    response: AnyObject,
    formatter: (res: AnyObject) => any,
  ): any => {
    return formatter(response)
  }

  public async request<T, U>(endpoint: Endpoint<T, U>, token?: string): Promise<Result<T, U>> {
    const { method, config } = endpoint
    const { params = {} } = config

    let query: AnyObject = {}
    let body: AnyObject | undefined

    if (method === 'GET') {
      // Queryはスネークケースを強制
      query = changeKeyFormat(params, 'snake') as AnyObject
    } else {
      // POST PUT PATCH
      body = changeKeyFormat(params, this.sendDataFormat) as AnyObject
    }

    // URLを作成
    const baseURL = isServer ? this.serverBaseURL : this.browserBaseURL
    // TODO ここの設定はプロジェクト毎に変更できるようにする
    const queryString = stringify(query, { arrayFormat: 'bracket' })
    const buildURL = `${baseURL}${endpoint.path}${this.extension}?${queryString}`

    return fetch(buildURL, {
        method: endpoint.method,
        headers: {
          ...this.defaultHeaders,
          Authorization: `Bearer ${token}`,
        },
        mode: 'cors',
        body: JSON.stringify(body),
      })
      .then(async (res) => {
        if (!this.validate(res)) {
          return Promise.reject(res)
        }

        let response = await res.json()
        if (this.getDataFormat) {
          response = changeKeyFormat(response, this.getDataFormat)
        }

        const mainFormatter = config.transformMainResponse || (r => r)
        const metaFormatter = config.transformMetaResponse || (r => r)
        return new Result<T, U>(
          res.status,
          this.mainResponseGetter(response, mainFormatter),
          this.metaResponseGetter(response, metaFormatter),
        )
      })
  }
}

export default Client
