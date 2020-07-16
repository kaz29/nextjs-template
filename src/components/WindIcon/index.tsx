import React from 'react'
import NavigationIcon from '@material-ui/icons/Navigation'
import { useStyles } from './styles'
import { Typography } from '@material-ui/core'

type Props = {
  degree: number
  kph: number
  dir: string
}

const WindIcon: React.FC<Props> = ({
  degree,
  kph,
  dir,
}) => {
  const classes = useStyles({degree})

  return (
    <>
      <NavigationIcon className={classes.icon}/>
      <Typography component="div" variant="caption">
        {`${dir}/${kph}kph`}
      </Typography>
    </>
  )
}

export default WindIcon
