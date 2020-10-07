// @ts-ignore
const withImages = require('next-images')

const withTM = require('next-transpile-modules')([
  'query-string',
  'split-on-first',
  'strict-uri-encode',
])

module.exports = withTM(withImages({
  publicRuntimeConfig: {
    WEATHER_API_ENDPOINT: process.env.WEATHER_API_ENDPOINT,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
}))
