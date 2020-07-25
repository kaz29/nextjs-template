import { createStyles, makeStyles } from '@material-ui/core'
import { colors } from '~/theme'

export const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      backgroundColor: colors.coverBackground,
      width: '100%',
      height: '100%',
      position: 'relative',
      textAlign: 'center',
    },
    progress: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      margin: 'auto',
    },
  }),
)
