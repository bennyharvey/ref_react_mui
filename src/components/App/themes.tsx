import { createMuiTheme } from '@material-ui/core/styles';
import {
    lightGreen,
    green,
    orange,
    lightBlue,
    deepPurple,
    deepOrange
  } from "@material-ui/core/colors";
  
let darkState = true
const palletType = darkState ? "dark" : "light";
const mainPrimaryColor = darkState ? lightBlue[500] : lightBlue[500];
const mainSecondaryColor = darkState ? lightBlue[500] : lightBlue[500];

export const darkTheme = createMuiTheme({
    palette: {
    type: palletType,
    primary: {
        main: mainPrimaryColor
    },
    secondary: {
        main: mainSecondaryColor
    },
    },
    typography: {
    fontFamily: [
        'Oswald',
        'Roboto Condensed',
        'Arimo',
        'Fira Sans',
        'Yanone Kaffeesatz',
        // 'Nunito',
        // 'Roboto',
        // '"Helvetica Neue"',
        'Arial',
        'sans-serif'
    ].join(','),
    }
})