import Client from './core/Client'
import getConfig from '~/utils/config'

const browserBaseURL = getConfig('WEATHER_API_ENDPOINT')
const client = new Client({
  browserBaseURL: browserBaseURL!,
  defaultHeaders: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})

export default client
