import React from "react";
import { HashLink } from "react-router-hash-link";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
import { navigationLinks } from "../utils/navigation.js";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        top: "2rem",
        right: "2rem",
        zIndex: "2",
      }}
    >
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        anchor="right"
        PaperProps={{
          sx: {
            width: 200,
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
      </Drawer>
    </Box>
  );
}
