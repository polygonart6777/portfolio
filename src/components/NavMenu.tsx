import React from "react";
import { HashLink } from "react-router-hash-link";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
          },
        }}
      >
        <List>
          {navigationLinks.map(({ name, id }) => (
            <ListItem
              key={id}
              button
              onClick={() => setOpen(false)}
              sx={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <Typography variant="h5" component="div" color="black">
                <HashLink
                  smooth
                  to={`/page#${id}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {name}
                </HashLink>
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
