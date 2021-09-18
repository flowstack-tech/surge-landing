import "./App.css";

import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ParallaxProvider } from "react-scroll-parallax";

import RootRouter from "./routing/root-router";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <RootRouter />
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
