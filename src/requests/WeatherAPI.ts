import { CurrentWeather } from '~/types'
import Endpoint from './core/Endpoint'
import getConfig from 'next/config'

export type GetRequestParam = {
  q: string,
  key: string,
}

class WeatherAPI {
  static getApiKey = (): string => {
    const { publicRuntimeConfig } = getConfig()
    const { apikey } = publicRuntimeConfig

    return apikey
  }

  static getCurrent = (params: GetRequestParam) => {
    return new Endpoint<CurrentWeather>('GET', '/current', {
      params,
    })
  }
}

export default WeatherAPI
