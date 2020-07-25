import getConfig from 'next/config'
import Client from './core/Client'

const { publicRuntimeConfig } = getConfig()
const { browserBaseURL, serverBaseURL } = publicRuntimeConfig

export default new Client({
  browserBaseURL,
  serverBaseURL,
  defaultHeaders: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
