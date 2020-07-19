import React from 'react'
import { CurrentWeather } from '~/types'
import { Card, CardHeader, CardContent, Typography, CardMedia, Box } from '@material-ui/core'
import { useStyles } from './styles'
import WindIcon from '~/components/WindIcon'

type Props = {
  currentWeather: CurrentWeather
}

const WeatherCard: React.FC<Props> = ({
  currentWeather,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <CardHeader
        titleTypographyProps={{align: 'center'}}
        subheaderTypographyProps={{align: 'center'}}
        title={`${currentWeather.location.name} - ${currentWeather.location.country}`}
        subheader={currentWeather.location.localtime}
      />
      <CardMedia
        className={classes.icon}
        image={`https://${currentWeather.current.condition.icon}`} />
      <CardContent>
        <Typography component="div" variant="caption" align="center">
          {currentWeather.current.condition.text}
        </Typography>
        <Typography component="div" variant="caption" align="center">
          {currentWeather.current.temp_c}℃
        </Typography>
        <Box className={classes.windIconContainer} display="flex" alignItems="center" justifyContent="center">
          <WindIcon
            degree={currentWeather.current.wind_degree}
            kph={currentWeather.current.wind_kph}
            dir={currentWeather.current.wind_dir}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default WeatherCard
