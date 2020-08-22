import { CurrentWeather, Forecast } from '~/types'
import Endpoint from './core/Endpoint'
import getConfig from '~/utils/config'

export type GetCurrentParam = {
  q: string,
  key: string,
}

export type GetForecastParam = {
  q: string,
  days: number,
  key: string,
}

class WeatherAPI {
  static getApiKey = (): string => {
    const apikey = getConfig('apikey')
    return apikey || ''
  }

  static getCurrent = (params: GetCurrentParam) => {
    return new Endpoint<CurrentWeather>('GET', '/current', {
      params,
    })
  }

  static getForecast = (params: GetForecastParam) => {
    return new Endpoint<Forecast>('GET', '/forecast', {
      params,
    })
  }
}

export default WeatherAPI
