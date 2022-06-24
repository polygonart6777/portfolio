import * as React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionHeading from "../components/SectionHeading";
import VerticalTabs from "../components/VerticalTabs";
import HorizontalTabs from "../components/HorizontalTabs";

export default function Experience() {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      <SectionHeading>Work history</SectionHeading>
      <Box
        component="div"
        sx={{
          display: "flex",
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          margin: "auto",
          paddingBottom: "2rem",
          paddingLeft: "2rem",
          paddingTop: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            height: 420,
            backgroundColor: "transparent",
            borderBottom: 1,
            borderTop: 1,
            borderColor: "#71C0D8",
            width: 1100,
            "@media (max-width:500px)": {
              width: "100%",
              height: 470,
              paddingTop: "1rem",
              borderTop: 1,
              borderColor: "#71C0D8",
            },
          }}
        >
          {isMobile ? <HorizontalTabs /> : <VerticalTabs />}
        </Box>
      </Box>
    </>
  );
}
