import React from "react"

import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import { useAppBarStyles } from "../Layout/styles"
import { Container, Typography } from "@material-ui/core"

type AppBarProps = {
  handleDrawerToggle: () => void
  drawerOpen: boolean
  title: string
}

export default function MUIAppBar(props: AppBarProps) {
  const classes = useAppBarStyles()
  const handleDrawerToggle = props.handleDrawerToggle
  const drawerOpen = props.drawerOpen

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Container maxWidth="sm">
            <Typography variant="h6" noWrap align="center">
              {props.title}
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
}
