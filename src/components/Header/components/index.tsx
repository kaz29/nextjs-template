import React from 'react'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './styles'

const Header: React.FC = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.wrapper} {...props}>
      <Box className={classes.container}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              NextJS template
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  )
}

export default Header
