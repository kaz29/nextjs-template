import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flex: 1,
      height: 250,
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
