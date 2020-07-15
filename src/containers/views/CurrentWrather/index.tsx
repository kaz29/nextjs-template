import React, { useState, useEffect } from 'react'
import Presentational from './components'
import { CurrentWeather } from '~/types'
import client from '~/requests/client'
import WeatherAPI from '~/requests/WeatherAPI'
import { useStores } from '~/helpers/useStores'
import { useSnackbar } from 'notistack'

type Props = {
}
const HomeContainer: React.FC<Props> = () => {
  const {app} = useStores()
  const { enqueueSnackbar } = useSnackbar()
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather|undefined>(undefined)

  useEffect(() => {
    (async () => {
      try {
        app.showLoading()
        const {response} = await client.request(WeatherAPI.getCurrent({
          q: 'Tokyo',
          key: WeatherAPI.getApiKey(),
        }))
        setCurrentWeather(response)
      } catch (error) {
        enqueueSnackbar('Error', { variant: 'error'})
      } finally {
        app.hideLoading()
      }
    })()
  }, [])

  return (
    <Presentational currentWeather={currentWeather} />
  )
}

export default HomeContainer
