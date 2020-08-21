// @ts-ignore
const withImages = require('next-images')

module.exports = withImages({
  publicRuntimeConfig: {
    serverBaseURL: process.env.WEATHER_API_ENDPOINT,
    browserBaseURL: process.env.WEATHER_API_ENDPOINT,
    apikey: process.env.WEATHER_API_KEY,
  },
})
