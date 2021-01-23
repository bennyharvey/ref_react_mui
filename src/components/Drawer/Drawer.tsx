import React from "react";
import {
  Switch as RouterSwitch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { useStyles } from "./styles";
import { Container, Typography } from "@material-ui/core";

type Page = {
  text: string;
  route: string;
  component: any;
};

type DrawerProps = {
  pages: Page[];
};

export default function CollapsableDrawer(props: DrawerProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(localStorage.getItem('drawerOpen') === 'false' ? false : true);

  const handleDrawerToggle = () => {
    localStorage.setItem('drawerOpen', (!drawerOpen).toString())
    if (drawerOpen) setDrawerOpen(false);
    else setDrawerOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
              Mini variant drawer
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
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
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
  );
}
