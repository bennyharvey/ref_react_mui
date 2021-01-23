import React from "react";
import { BrowserRouter } from "react-router-dom"

import "./App.css";
import Drawer from "../Drawer";
import { pages } from "./pages"

const App = () => {
  localStorage.setItem('theme', 'light');
  return (
    <BrowserRouter>
      <Drawer pages={pages} />
    </BrowserRouter>
  );
};

export default App;
