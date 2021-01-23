import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "../Layout";
import { pages } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
        <Layout pages={pages} />
    </BrowserRouter>
  );
};

export default App;
