import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {default as MenuComponent } from '@material-ui/core/Menu'
import { useStyles } from './styles'
import MenuItem from './MenuItem'
import { Menu } from '../types'
import { Divider } from '@material-ui/core'

type Props = {
  menus: Menu[]
  currentPath: string
  handleMenuSelect: (path: string, as: string) => void
}

const Presentational: React.FC<Props> = ({
  menus,
  currentPath,
  handleMenuSelect,
  ...rest
}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuClick = (path: string, as: string) => {
    handleMenuSelect(path, as)
    setAnchorEl(null)
  }

  return (
    <Box className={classes.wrapper} {...rest}>
      <Box className={classes.container}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              NextJS template
            </Typography>
          </Toolbar>
        </AppBar>
        <MenuComponent
          id="main-menu"
          anchorEl={anchorEl}
          keepMounted={true}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menus.map((menu, index) => {
            if (menu.path && menu.as) {
              return <MenuItem
                key={`menuitem-${index}`}
                label={menu.label}
                path={menu.path}
                as={menu.as}
                currentPath={currentPath}
                onClick={handleMenuClick}
              />
            } else {
              return <Divider
                key={`menuitem-${index}`}
              />
            }
          })}
        </MenuComponent>
      </Box>
    </Box>
  )
}

export default Presentational
