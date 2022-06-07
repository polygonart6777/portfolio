import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Fab from "@mui/material/Fab";

import { social } from "../utils/social.js";

export default function Social() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      component="div"
      sx={{ position: "absolute", bottom: "2rem", right: "2rem" }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        hidden={false}
        icon={
          <SpeedDialIcon
            sx={{
              opacity: 1,
              "a:visited": {
                backgroundColor: "#71C0D8",
              },
            }}
          />
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="up"
      >
        {social.map(({ network, url, icon }) => (
          <SpeedDialAction
            key={network.toLowerCase()}
            icon={
              <Fab
                sx={{
                  backgroundColor: "#71C0D8",
                  opacity: 1,
                  color: "black",
                  width: "40px",
                  height: "40px",
                }}
              >
                {icon}
              </Fab>
            }
            tooltipTitle={network}
            onClick={() => setOpen(!open)}
            // @ts-expect-error
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="black"
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
