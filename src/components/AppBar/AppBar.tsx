import React from "react";
import {
  Switch as RouterSwitch,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { useStyles } from "../Layout/styles";
import { Container, Typography } from "@material-ui/core";

interface Page {
  text: string;
  route: string;
  component: any;
};

interface AppBarProps {

};

export default function MUIAppBar(props: AppBarProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(localStorage.getItem('drawerOpen') === 'false' ? false : true);

  const handleDrawerToggle = () => {
    localStorage.setItem('drawerOpen', (!drawerOpen).toString())
    if (drawerOpen) setDrawerOpen(false);
    else setDrawerOpen(true);
  };

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
              Mini variant drawer
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
