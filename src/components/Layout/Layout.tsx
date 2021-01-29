import React, { useReducer } from "react";
import { Switch as RouterSwitch, Route, Link as RouterLink, useLocation } from "react-router-dom";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "../AppBar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";

import { useStyles } from "./styles";
import { appTitle } from "../App/config";
import { Page } from "../App/pages";


type BasicAction = {
    type: string
    param?: string
}

type LayoutState = {
    count: number,
    drawerOpen: boolean
}

const initialState = {
    count: 0,
    drawerOpen: localStorage.getItem("drawerOpen") === "false" ? false : true
};

const reducer = (state: LayoutState, action: BasicAction) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "setDrawerState":
            localStorage.setItem("drawerOpen", (!state.drawerOpen).toString());
            switch (action.param) {
                case "open":
                    return { ...state, drawerOpen: state.drawerOpen = true };
                case "close":
                    return { ...state, drawerOpen: state.drawerOpen = false };
                default:
                    throw new Error('wrong param');
            }
        default:
            throw new Error();
    }
};


type DrawerProps = {
    pages: Page[];
};

export default function CollapsableDrawerLayout(props: DrawerProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const theme = useTheme();
    const classes = useStyles(theme);
    const location = useLocation();

    localStorage.setItem("theme", "light");
    const [mapDrawerOpen, setMapDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        if (state.drawerOpen) dispatch({type: "setDrawerState", param: "close"});
        else dispatch({type: "setDrawerState", param: "open"});
    };

    const handleMapDrawerToggle = () => {
        if (mapDrawerOpen) setMapDrawerOpen(false);
        else setMapDrawerOpen(true);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                drawerOpen={state.drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                mapDrawerOpen={mapDrawerOpen}
                handleMapDrawerToggle={handleMapDrawerToggle}
                title={appTitle}
            />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: state.drawerOpen,
                    [classes.drawerClose]: !state.drawerOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: state.drawerOpen,
                        [classes.drawerClose]: !state.drawerOpen,
                    }),
                }}
            >
                <div className={classes.toolbar}></div>
                <Divider />
                <List>
                    {props.pages.map((page, index) => (
                        <ListItem component={RouterLink} to={page.route} button key={index}>
                            <ListItemIcon>{page.icon}</ListItemIcon>
                            <ListItemText primary={page.text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.defaultContentPadding]: location.pathname !== "/map",
                })}
            >
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
            {location.pathname === "/map" ? (
                <Drawer
                    variant="permanent"
                    anchor="right"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: mapDrawerOpen,
                        [classes.mapDrawerClose]: !mapDrawerOpen,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: mapDrawerOpen,
                            [classes.mapDrawerClose]: !mapDrawerOpen,
                        }),
                    }}
                >
                    <div className={classes.toolbar}></div>
                    <List>
                        <ListItem button key={1}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"map stuff"}
                                onClick={() => {
                                    alert("fuck");
                                }}
                            />
                        </ListItem>
                        <ListItem button key={2}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"map stuff"} />
                        </ListItem>
                        <ListItem button key={3}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"map stuff"} />
                        </ListItem>
                        <ListItem button key={4}>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={"map stuff"} />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
            ) : (
                ""
            )}
        </div>
    );
}
