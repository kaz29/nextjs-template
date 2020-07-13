import getConfig from 'next/config'
import Client from './core/Client'
import { AnyObject } from '~/types'

const { publicRuntimeConfig } = getConfig()
const { browserBaseURL, serverBaseURL } = publicRuntimeConfig

export default new Client({
  browserBaseURL,
  serverBaseURL,
  defaultHeaders: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  sendDataFormat: 'snake',
  getDataFormat: 'camel',
  extension: '.json',
  mainResponseGetter: (
    response: AnyObject,
    formatter: (res: AnyObject) => any,
  ): any => {
    return formatter(response)
  },
  metaResponseGetter: (
    response: AnyObject,
    formatter: (res: AnyObject) => any,
  ) => {
    return formatter(response)
  },
})
