import React from 'react'
import { useStyles } from './styles'
import { Button } from '@material-ui/core'

type Props = {
  onStart: () => void
}
const Presentational: React.FC<Props> = ({
  onStart,
}) => {
  const classes = useStyles()

  return (
    <Button onClick={onStart} />
  )
}

export default Presentational