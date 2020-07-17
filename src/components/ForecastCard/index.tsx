import React from 'react'
import { ForecastDay } from '~/types'
import { Card, CardHeader, CardContent, Typography, CardMedia, Box } from '@material-ui/core'
import { useStyles } from './styles'

type Props = {
  forecastDay: ForecastDay
}

const ForecastCard: React.FC<Props> = ({
  forecastDay,
}) => {
  const classes = useStyles()

  return (
    <Card className={classes.container}>
      <CardHeader
        title={forecastDay.date}
      />
      <CardMedia
        className={classes.icon}
        image={`https://${forecastDay.day.condition.icon}`} />
      <CardContent>
        <Typography component="div" variant="caption" align="center">
          {forecastDay.day.condition.text}
        </Typography>
        <Box component="div" display="flex" justifyContent="center">
          <Typography variant="h6" align="center" color={'error'}>
            {forecastDay.day.maxtemp_c}
            <Typography variant="caption" align="center" color={'error'}>℃</Typography>
          </Typography>
          <Typography className={classes.separater} variant="h6" align="center" color="textSecondary">
            /
          </Typography>
          <Typography className={classes.minTempText} variant="h6" align="center">
            {forecastDay.day.mintemp_c}
            <Typography variant="caption" align="center">℃</Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ForecastCard
