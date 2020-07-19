import React from 'react'
import { useStyles } from './styles'
import { Box, Grid } from '@material-ui/core'
import { Forecast } from '~/types'
import ForecastCard from '~/components/ForecastCard'
import WeatherCard from '~/components/WeatherCard'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

type Props = {
  forecast?: Forecast
  width?: Breakpoint
}

const Presentational: React.FC<Props> = ({
  forecast,
  width,
}) => {
  const classes = useStyles()

  return (
    <Grid
      container={true}
      className={classes.container}
      component="div"
      alignItems="center"
      direction={width && isWidthUp('sm', width) ? 'row': 'column'}
      spacing={3}
    >
      <Grid item={true} xs={12}>
        <Box>
          {
            forecast &&
            <WeatherCard currentWeather={forecast}/>
          }
        </Box>
      </Grid>
      {
        forecast &&
        forecast.forecast.forecastday.map((forecastDay, index) => (
          <Grid key={`forecast-day-${index}`} item={true} xs={width && isWidthUp('sm', width) ? true: 12}>
            <ForecastCard forecastDay={forecastDay} />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default withWidth()(Presentational)
