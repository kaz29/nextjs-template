import React from 'react'
import { NextPage } from 'next'
import CurrentWeatherComponent from '~/containers/views/CurrentWrather'

type Props ={
}

const CurrentWeather: NextPage<Props> = () => {
  return (
    <CurrentWeatherComponent />
  )
}

CurrentWeather.getInitialProps = async () => {
  return {}
}

export default CurrentWeather
