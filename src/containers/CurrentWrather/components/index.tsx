import React from 'react'
import { useStyles } from './styles'
import { Box } from '@material-ui/core'
import { CurrentWeather } from '~/types'
import Weather from './Weather'

type Props = {
  currentWeather: CurrentWeather
}

const Presentational: React.FC<Props> = ({
  currentWeather,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Weather currentWeather={currentWeather}/>
    </Box>
  )
}

export default Presentational
