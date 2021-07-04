import React from 'react'
import Presentational from './components'
import { useForecast } from './hooks'

type Props = {
  code?: string
}
const ForecastView: React.FC<Props> = ({
  code,
}) => {
  const {
    loading,
    forecast,
  } = useForecast({ code })

  return (
    <Presentational loading={loading} forecast={forecast} />
  )
}

export default ForecastView
