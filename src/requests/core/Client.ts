import fetch from 'isomorphic-unfetch'
import { stringify } from 'query-string'
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

  public async request<T>(endpoint: Endpoint<T>): Promise<Result<T>> {
    const { method, config } = endpoint
    const { params = {} } = config

    let query: AnyObject = {}
    let body: AnyObject | undefined

    if (method === 'GET') {
      query = params as AnyObject
    } else {
      body = params as AnyObject
    }

    const baseURL = isServer ? this.serverBaseURL : this.browserBaseURL
    const queryString = stringify(query, { arrayFormat: 'bracket' })
    const buildURL = `${baseURL}${endpoint.path}.json?${queryString}`

    return fetch(buildURL, {
        method: endpoint.method,
        headers: {
          ...this.defaultHeaders,
        },
        mode: 'cors',
        body: JSON.stringify(body),
      })
      .then(async (res) => {
        if (!this.validate(res)) {
          return Promise.reject(res)
        }

        const response = await res.json()
        return new Result<T>(
          res.status,
          response,
        )
      })
  }
}

export default Client
