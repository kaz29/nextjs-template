// @ts-ignore
const withImages = require('next-images')
// require('dotenv').config()

module.exports = withImages({
  publicRuntimeConfig: {
    serverBaseURL: process.env.WEATHER_API_ENDPOINT,
    browserBaseURL: process.env.WEATHER_API_ENDPOINT,
    apikey: process.env.WEATHER_API_KEY,
  },
  // exportPathMap: async (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) => {
  //   return {
  //     '/': { page: '/' },
  //     '/current/tokyo': { page: '/current/[code]', query: { code: 'tokyo' } },
  //     '/current/osaka': { page: '/current/[code]', query: { code: 'osaka' } },
  //     '/forecast/tokyo': { page: '/forecast/[code]', query: { code: 'tokyo' } },
  //     '/forecast/osaka': { page: '/forecast/[code]', query: { code: 'osaka' } },
  //   }
  // },
})
