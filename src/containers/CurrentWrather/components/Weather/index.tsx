import React from 'react'
import { CurrentWeather } from '~/types'
import { Card, CardHeader, CardContent, Typography, CardMedia } from '@material-ui/core'
import { useStyles } from './styles'

type Props = {
  currentWeather: CurrentWeather
}

const Weather: React.FC<Props> = ({
  currentWeather,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <CardHeader
        title={`${currentWeather.location.name} - ${currentWeather.location.country}`}
        subheader={`${currentWeather.location.localtime} (Current Weather)`}
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
      </CardContent>
    </Card>
  )
}

export default Weather
