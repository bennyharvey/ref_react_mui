import React from "react";

import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import MapIcon from "@material-ui/icons/Map"

import Users from '../../pages/Users'
import Demo from '../../pages/Demo'
import Map from '../../pages/Map'

export type Page = {
  text: string,
  route: string,
  component: any,
  icon: any,
}

let pages: Page[] = [
  {
    text: "Users",
    route: '/users',
    component: <Users />,
    icon: <InboxIcon />
  },
  {
    text: "Demo",
    route: '/demo',
    component: <Demo />,
    icon: <MailIcon />
  },
  {
    text: "Map",
    route: '/map',
    component: <Map />,
    icon: <MapIcon />
  },
  {
    text: "root",
    route: "/",
    component: 'root',
    icon: ''
  }
]

export { pages }