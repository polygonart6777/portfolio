import * as React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionHeading from "../components/SectionHeading";
import VerticalTabs from "../components/VerticalTabs";
import HorizontalTabs from "../components/HorizontalTabs";

const tabsContainerStyle = {
  display: "flex",
  height: "90vh",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  margin: "auto",
  paddingBottom: "1rem",
  paddingLeft: "2rem",
  paddingTop: "2rem",
  paddingRight: "2rem",
};

const tabStyle = {
  display: "flex",
  height: 410,
  backgroundColor: "transparent",
  borderBottom: 1,
  borderTop: 1,
  borderColor: "#71C0D8",
  width: 1200,
  "@media (max-width:500px)": {
    width: "100%",
    height: 570,
    paddingTop: "2rem",
    borderTop: 1,
    borderColor: "#71C0D8",
  },
};

export default function Experience() {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      <SectionHeading>Work history</SectionHeading>
      <Box component="div" sx={tabsContainerStyle}>
        <Box component="div" sx={tabStyle}>
          {isMobile ? <HorizontalTabs /> : <VerticalTabs />}
        </Box>
      </Box>
    </>
  );
}
