import React, { useState, useEffect } from 'react'
import Presentational from './components'
import { Forecast } from '~/types'
import client from '~/requests/client'
import WeatherAPI from '~/requests/WeatherAPI'
import { useStores } from '~/helpers/useStores'
import { useSnackbar } from 'notistack'

type Props = {
}
const HomeContainer: React.FC<Props> = () => {
  const {app} = useStores()
  const { enqueueSnackbar } = useSnackbar()
  const [forecast, setForecast] = useState<Forecast|undefined>(undefined)

  useEffect(() => {
    (async () => {
      try {
        app.showLoading()
        const {response} = await client.request(WeatherAPI.getForecast({
          q: 'Tokyo',
          days: 7,
          key: WeatherAPI.getApiKey(),
        }))
        setForecast(response)
      } catch (error) {
        enqueueSnackbar('Error', { variant: 'error'})
      } finally {
        app.hideLoading()
      }
    })()
  }, [])

  return (
    <Presentational forecast={forecast} />
  )
}

export default HomeContainer
