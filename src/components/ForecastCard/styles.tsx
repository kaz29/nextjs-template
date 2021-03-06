import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 250,
      width: 320,
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
      marginTop: 16,
    },
    icon: {
      width: 64,
      height: 64,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    windIconContainer: {
      marginTop: 16,
    },
    minTempText: {
      color: theme.palette.info.main,
    },
    separater: {
      marginLeft: 8,
      marginRight: 8,
    },
  }),
)
