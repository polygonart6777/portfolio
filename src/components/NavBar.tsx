import * as React from "react";
import { HashLink } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <Box component="div">
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Toolbar className={styles.NavBar}>
          <Typography variant="h5" component="div">
            <HashLink smooth to="/page#projects">
              Projects
            </HashLink>
          </Typography>
          <Typography variant="h5" component="div">
            <HashLink smooth to="/page#about">
              About
            </HashLink>
          </Typography>
          <Typography variant="h5" component="div">
            <HashLink smooth to="/pages#contact">
              Contact
            </HashLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
