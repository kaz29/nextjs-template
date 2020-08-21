const getConfig = () => {
  return {
    publicRuntimeConfig: {
      serverBaseURL: process.env.WEATHER_API_ENDPOINT,
      browserBaseURL: process.env.WEATHER_API_ENDPOINT,
      apikey: process.env.WEATHER_API_KEY,
    },
  }
}

export default getConfig
