import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "../Layout";
import { pages } from "./pages";

import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./themes"

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Layout pages={pages} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
