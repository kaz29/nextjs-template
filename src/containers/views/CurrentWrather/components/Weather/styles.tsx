import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: theme.breakpoints.values.sm,
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
