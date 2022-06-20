import React from "react";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";
import { social } from "../utils/social.js";

const iconButtonStyle = {
  display: "block",
  height: "3rem",
  width: "3rem",
  backgroundColor: "#3d3afb",
  opacity: "0.75",
  "&:hover": {
    backgroundColor: "#71C0D8",
    opacity: "1",
    transition: "all 0.5s ease",
  },
};

export default function Social() {
  const socialItems = social.map((socialItem) => (
    <div
      key={socialItem.network.toLowerCase()}
      style={{ paddingBottom: "1.25rem", zIndex: 100 }}
    >
      <Link
        href={socialItem.url}
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        color="inherit"
      >
        <Tooltip
          title={socialItem.username}
          placement="left"
          TransitionComponent={Zoom}
          disableFocusListener
        >
          <IconButton
            sx={iconButtonStyle}
            color="inherit"
            aria-label={socialItem.network}
          >
            {socialItem.icon}
          </IconButton>
        </Tooltip>
      </Link>
    </div>
  ));

  return (
    <div
      style={{
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
        zIndex: "10",
      }}
    >
      {socialItems}
    </div>
  );
}
