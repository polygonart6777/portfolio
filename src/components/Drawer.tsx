import React from "react";
import AppBar from "@mui/material/AppBar";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import ToolbarMobile from "./ToolbarMobile";

import { navigationLinks } from "../utils/navigation.js";
import { social } from "../utils/social.js";
import styles from "./NavBar.module.scss";

interface DrawerProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}
export default function Drawer({ open, setOpen }: DrawerProps) {
  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      anchor="right"
      PaperProps={{
        sx: {
          backgroundColor: "#3d3afb",
          color: "white ",
        },
      }}
    >
      <List>
        {navigationLinks.map(({ name, id }) => (
          <ListItem key={id} onClick={() => setOpen(false)}>
            <ListItemButton
              component={Link}
              href={`#${id}`}
              sx={{
                "&:hover": {
                  backgroundColor: "#3634e1",
                  transform: "scale3d(1.05, 1.05, 1)",
                },
              }}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
}
