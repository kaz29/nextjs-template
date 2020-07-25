import React from 'react'
import { useStyles } from './styles'
import { Box, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

type Props = {
}

const Presentational: React.FC<Props> = () => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <Box className={classes.container}>
      <Typography
        variant="h5"
        align="center">
        {t('Welcome to')} NextJS Template
      </Typography>
    </Box>
  )
}

export default Presentational
