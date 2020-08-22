import React, { useState, useEffect } from 'react'
import Presentational from './components'
import { CurrentWeather } from '~/types'
import client from '~/requests/client'
import WeatherAPI from '~/requests/WeatherAPI'
import { useStores } from '~/helpers/useStores'
import { useSnackbar } from 'notistack'
import getConfig from 'next/config'

type Props = {
  code?: string
}

const CurrentContainerView: React.FC<Props> = ({
  code,
}) => {
  const {app} = useStores()
  const { enqueueSnackbar } = useSnackbar()
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather|undefined>(undefined)

  useEffect(() => {
    if (!code) {
      return
    }

    (async () => {
      try {
        app.showLoading()
        const {response} = await client.request(WeatherAPI.getCurrent({
          q: code,
          key: WeatherAPI.getApiKey(),
        }))
        setCurrentWeather(response)
      } catch (error) {
        enqueueSnackbar('Error', { variant: 'error'})
      } finally {
        app.hideLoading()
      }
    })()
  }, [code])

  return (
    <Presentational currentWeather={currentWeather} />
  )
}

export default CurrentContainerView
