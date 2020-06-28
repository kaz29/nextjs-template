import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      margin: 'auto',
      maxWidth: theme.breakpoints.values.sm,
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.breakpoints.values.md,
      },
    },
  }),
)
