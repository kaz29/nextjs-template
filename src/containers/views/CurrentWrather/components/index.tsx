import React from 'react'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'
import { CurrentWeather } from '~/types'
import WeatherCard from '~/components/WeatherCard'

type Props = {
  currentWeather?: CurrentWeather
}

const Presentational: React.FC<Props> = ({
  currentWeather,
}) => {
  const classes = useStyles()

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
