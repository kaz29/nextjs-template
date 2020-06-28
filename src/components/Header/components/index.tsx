import React from 'react'
import { CircularProgress, Box, Theme, withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './styles'

const Header: React.FC = (props) => {
  const classes = useStyles()

  return (
    <Wrapper {...props}>
      <Box className={classes.container}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              NextJS template
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Wrapper>
  )
}
const Wrapper = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    flex: 1,
    minWidth: '100%',
    minHeight: 56,
    [theme.breakpoints.up('sm')]: {
      minHeight: 64,
    },
},
}))(Box)

export default Header
