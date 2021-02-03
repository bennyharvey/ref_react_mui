import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Layout from "../Layout";
import { pages } from "./pages";

import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "./themes";
import { StateContext, initialGlobalState } from "./StateContext";

const App = () => {
    const [globalState, setGlobalState] = useState(initialGlobalState);

    return (
        <StateContext.Provider value={{ globalState, setGlobalState }}>
            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <Layout pages={pages} />
                </ThemeProvider>
            </BrowserRouter>
        </StateContext.Provider>
    );
};

export default App;
