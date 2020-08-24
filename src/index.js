import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Default theme
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const mainTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <React.Fragment>
    <Router>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
