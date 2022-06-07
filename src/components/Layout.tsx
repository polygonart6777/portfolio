import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Hidden from "@mui/material/Hidden";

import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import { navigationLinks } from "../utils/navigation.js";

export default function Layout() {
  return (
    <Router>
      <Hidden smDown>
        <NavBar />
      </Hidden>
      <Hidden smUp>
        <NavMenu />
      </Hidden>
      {navigationLinks.map(({ id, component }) => (
        <section id={id} key={id}>
          {component}
        </section>
      ))}
    </Router>
  );
}
