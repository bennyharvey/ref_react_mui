import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 300;
const drawerWidthCollapsed = 60;
const appBarHeight = 64;

export const paperElevation = 3

export const useCommonStyles = makeStyles((theme) => ({
  basicPaper: {
    padding: "1rem"
  },
  defaultContentPadding:{
    padding: theme.spacing(3),
  }
}));

export const useMapStyles = makeStyles((theme) => ({
  mapContainer: {
    height: `calc(100vh - ${appBarHeight}px)`
  },
}));

export const useAppBarStyles = makeStyles((theme) => ({
  appBar: {
    // top: 'auto',
    // bottom: 0,
    width: `calc(100% - ${drawerWidthCollapsed}px)`,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: appBarHeight,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: drawerWidthCollapsed,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    height: appBarHeight,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },

}));
