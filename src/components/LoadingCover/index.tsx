import React from 'react'
import { CircularProgress, Box } from '@material-ui/core'
import { useStyles } from './styles'

const LoadingCover: React.FC = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.wrapper} {...props}>
      <CircularProgress className={classes.progress} />
    </Box>
  )
}

export default LoadingCover
