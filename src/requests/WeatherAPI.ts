import { CurrentWeather } from '~/types'
import Endpoint from './core/Endpoint'

export type GetRequestParam = {
  q: string,
  key: string,
}

class WeatherAPI {
  static getCurrent = (params: GetRequestParam) => {
    return new Endpoint<CurrentWeather>('GET', '/current', {
      params,
    })
  }
}

export default WeatherAPI
