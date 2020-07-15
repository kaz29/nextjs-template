import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: 320,
      height: 320,
      marginTop: 16,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    icon: {
      width: 64,
      height: 64,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }),
)
