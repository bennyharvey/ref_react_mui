import React from "react";

import Users from '../../pages/Users'
import Demo from '../../pages/Demo'

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
    icon: ''
  },
  {
    text: "Demo",
    route: '/demo',
    component: <Demo />,
    icon: ''
  },
]

export { pages }