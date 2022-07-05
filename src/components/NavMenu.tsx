import React from "react";
import AppBar from "@mui/material/AppBar";

import ToolbarMobile from "./ToolbarMobile";
import Drawer from "./Drawer";

export default function NavMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <>
          <ToolbarMobile setOpen={setOpen} />
          <Drawer open={open} setOpen={setOpen} />
        </>
      </AppBar>
    </>
  );
}
