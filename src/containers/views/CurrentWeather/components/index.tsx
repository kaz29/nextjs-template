import React from 'react'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'
import { CurrentWeather } from '~/types'
import WeatherCard from '~/components/WeatherCard'
import LoadingCover from '~/components/LoadingCover'

type Props = {
  loading: boolean
  currentWeather?: CurrentWeather
}

const Presentational: React.FC<Props> = ({
  loading,
  currentWeather,
}) => {
  const classes = useStyles()

  if (loading) {
    return (
      <Box className={classes.loadingContainer}>
        <LoadingCover />
      </Box>
    )
  }

  return (
    <Box className={classes.container}>
      {
        currentWeather &&
        <WeatherCard currentWeather={currentWeather}/>
      }
    </Box>
  )
}

export default Presentational
