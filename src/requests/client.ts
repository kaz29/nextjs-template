import getConfig from 'next/config'
import Client from './core/Client'

let client: Client

try {
  const { publicRuntimeConfig } = getConfig()
  const { browserBaseURL } = publicRuntimeConfig
  client = new Client({
    browserBaseURL,
    defaultHeaders: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
} catch(error) {
  /**
   * TODO: 開発モード時に一時的に読み込めないタイミングがある(?)ので暫定対応
   */
  console.log('============= Could not read config')

  client = new Client({
    browserBaseURL: '',
    defaultHeaders: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}

export default client
