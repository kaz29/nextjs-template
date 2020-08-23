const getConfig = () => {
  return {
    publicRuntimeConfig: {
      WEATHER_API_ENDPOINT: process.env.WEATHER_API_ENDPOINT,
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
  }
}

export default getConfig
