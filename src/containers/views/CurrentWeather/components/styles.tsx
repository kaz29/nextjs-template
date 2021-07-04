import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() =>
  createStyles({
    loadingContainer: {
      marginTop: 32,
    },
    container: {
      width: '100%',
      height: '100%',
      marginTop: 16,
    },
  }),
)
