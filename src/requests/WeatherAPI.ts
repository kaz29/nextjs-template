import { AnyObject, Weather } from '~/types'
import Endpoint from './core/Endpoint'

export type GetRequestParam = {
  q: string,
  key: string,
}

class WeatherAPI {
  /**
   * 現在の天気取得
   */
  static getCurrent = (params: GetRequestParam) => {
    return new Endpoint<Weather>('GET', '/current', {
      params,
      transformMainResponse: (response: AnyObject) => {
        return response.current
      },
      transformMetaResponse: (response: AnyObject) => {
        return {
          location: response.location,
        }
      },
    })
  }
}

export default WeatherAPI
