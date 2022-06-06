import React from "react";
import Layout from "./components/Layout";
import styles from "./App.module.scss";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { DarkTheme } from "./theme.js";

function App() {
  return (
    <div className={styles.App}>
      <ThemeProvider theme={DarkTheme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
