import React from "react"
import {
  Switch as RouterSwitch,
  Route,
  Link as RouterLink,
} from "react-router-dom"

import clsx from "clsx"
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer"
import AppBar from "../AppBar"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"


import { useStyles } from "./styles"
import { appTitle } from  "../App/config"
import { Page } from "../App/pages"

type DrawerProps = {
  pages: Page[]
}

export default function CollapsableDrawerLayout(props: DrawerProps) {
  const theme = useTheme()
  const classes = useStyles(theme)

  localStorage.setItem("theme", "light")
  const [drawerOpen, setDrawerOpen] = React.useState(localStorage.getItem('drawerOpen') === 'false' ? false : true)

  const handleDrawerToggle = () => {
    localStorage.setItem('drawerOpen', (!drawerOpen).toString())
    if (drawerOpen) setDrawerOpen(false)
    else setDrawerOpen(true)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} title={appTitle} />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <List>
          {props.pages.map((page, index) => (
            <ListItem component={RouterLink} to={page.route} button key={index}>
              <ListItemIcon>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RouterSwitch>
          {props.pages.map((page, index) =>
            page.route !== "/" ? (
              <Route path={page.route} key={"route" + index}>
                {page.component}
              </Route>
            ) : (
              <Route exact path="/" key={"route" + index}>
                {page.component}
              </Route>
            )
          )}
        </RouterSwitch>
      </main>
    </div>
  )
}
