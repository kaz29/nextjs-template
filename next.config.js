// @ts-ignore
const withImages = require('next-images')

module.exports = withImages({
  publicRuntimeConfig: {
    WEATHER_API_ENDPOINT: process.env.WEATHER_API_ENDPOINT,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
})
