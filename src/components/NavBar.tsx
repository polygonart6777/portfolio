import * as React from "react";
import { HashLink } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styles from "./NavBar.module.scss";
import { navigationLinks } from "../utils/navigation.js";

export default function NavBar() {
  return (
    <Box component="div">
      <AppBar position="static" style={{ boxShadow: "none" }}>
        <Toolbar className={styles.NavBar}>
          {navigationLinks.map(({ name, id }) => (
            <Box
              key={id}
              component="div"
              sx={{ fontSize: 25, paddingLeft: "1rem", paddingRight: "1rem" }}
            >
              <HashLink smooth to={`#${id}`}>
                {name}
              </HashLink>
            </Box>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
