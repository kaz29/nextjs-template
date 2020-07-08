import React from 'react'
import { useStyles } from './styles'
import { Box, Typography } from '@material-ui/core'

type Props = {
}

const Presentational: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography
        variant="h5"
        align="center">
        Welcome to NextJS Template
      </Typography>
    </Box>
  )
}

export default Presentational
