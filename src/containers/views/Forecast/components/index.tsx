import React from 'react'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'
import { Forecast } from '~/types'
import ForecastCard from '~/components/ForecastCard'
import WeatherCard from '~/components/WeatherCard'

type Props = {
  forecast?: Forecast
}

const Presentational: React.FC<Props> = ({
  forecast,
}) => {
  const classes = useStyles()

  return (
    <>
    <Box className={classes.container}>
      {
        forecast &&
        <WeatherCard currentWeather={forecast}/>
      }
    </Box>
    <Box className={classes.container} component="div" display="flex" justifyContent="center">
      {
        forecast &&
        forecast.forecast.forecastday.map((forecastDay, index) => (
          <ForecastCard
            key={`forecast-day-${index}`}
            forecastDay={forecastDay}
          />
        ))
      }
    </Box>
    </>
  )
}

export default Presentational
