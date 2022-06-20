import React from "react";

import Divider from "@mui/material/Divider";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <Divider
      variant="middle"
      light
      textAlign="left"
      sx={{
        width: "60%",
        color: "rgb(113,192,216,1)",
        fontSize: "3rem",
        fontFamily: "PT Serif",
        paddingTop: "2rem",
        "&::before": {
          borderTop: "medium solid #3d3afb",
        },
        "&::after": {
          borderTop: "medium solid #3d3afb ",
        },
        "@media (max-width:920px)": {
          fontSize: "2rem",
          width: "80%",
        },
      }}
    >
      {children}
    </Divider>
  );
}
