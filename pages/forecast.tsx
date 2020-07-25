import React from 'react'
import { NextPage } from 'next'
import {default as ForecastView} from '~/containers/views/Forecast'

type Props ={
}

const Forecast: NextPage<Props> = () => {
  return (
    <ForecastView />
  )
}

export default Forecast
