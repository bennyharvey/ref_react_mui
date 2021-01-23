import React from "react";

import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"

import Users from '../../pages/Users'
import Demo from '../../pages/Demo'
import Map from '../../pages/Map'

type Page = {
  text: string,
  route: string,
  component: any,
  icon: any,
}

let pages: Page[]
pages = [
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
    icon: <MailIcon />
  },
]

export { pages }