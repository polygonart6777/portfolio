import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Fab from "@mui/material/Fab";

import { social } from "../utils/social.js";

// const useStyles = makeStyles((theme) => ({
//     speedDial: {
//         position: "absolute",
//         top: theme.spacing(6),
//         right: theme.spacing(6),
//     },
//     iconColor: {
//         color: theme.palette.foreground.default,
//     },
// }));

export default function Social() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      component="div"
      sx={{ position: "absolute", top: "2rem", right: "2rem" }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        hidden={false}
        icon={<SpeedDialIcon sx={{ color: "white" }} />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
      >
        {social.map(({ network, url, icon }) => (
          <SpeedDialAction
            key={network.toLowerCase()}
            icon={
              <Fab
                sx={{
                  backgroundColor: "#ff5cb8",
                  color: "white",
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
            color="inherit"
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
