import React, { useState, useEffect } from 'react'
import Presentational from './components'
import { Forecast } from '~/types'
import client from '~/requests/client'
import WeatherAPI from '~/requests/WeatherAPI'
import { useStores } from '~/helpers/useStores'
import { useSnackbar } from 'notistack'

type Props = {
  code?: string
}
const ForecastView: React.FC<Props> = ({
  code,
}) => {
  const {app} = useStores()
  const { enqueueSnackbar } = useSnackbar()
  const [forecast, setForecast] = useState<Forecast|undefined>(undefined)

  useEffect(() => {
    if (!code) {
      return
    }
    (async () => {
      try {
        app.showLoading()
        const {response} = await client.request(WeatherAPI.getForecast({
          q: code,
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
  }, [code])

  return (
    <Presentational forecast={forecast} />
  )
}

export default ForecastView
