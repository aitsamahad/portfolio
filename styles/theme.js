import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: "#1B1E24",
      white: "#ffffff",
    },
    primary: {
      main: "#286fb4",
    },
    secondary: {
      main: "#8E8E8C", // omitting light and dark will calculate from main
      contrastText: "#757575",
    },
    grey: {
      500: "#bcbcbc",
      700: "#79797a",
    },
    info: {
      main: "#1bb2f1",
    },
    success: {
      main: "#00d589",
    },
    error: {
      main: "#832838",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
  },
})

export default theme
