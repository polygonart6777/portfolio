import * as React from "react";
import { HashLink } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./NavBar.module.scss";
import { navigationLinks } from "../utils/navigation.js";

export default function NavBar() {
  return (
    <Box component="div">
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Toolbar className={styles.NavBar}>
          {navigationLinks.map(({ name, id }) => (
            <Typography key={id} variant="h5" component="div">
              <HashLink smooth to={`/page#${id}`}>
                {name}
              </HashLink>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
