import React from 'react'
import Presentational from './components'
import { useCurrentWeather } from './hooks'

type Props = {
  code?: string
}

const CurrentContainerView: React.FC<Props> = ({
  code,
}) => {
  const { loading, currentWeather } = useCurrentWeather({ code })

  return (
    <Presentational loading={loading} currentWeather={currentWeather} />
  )
}

export default CurrentContainerView
