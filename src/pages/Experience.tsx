import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { experience } from "../utils/experience.js";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="h5" sx={{ paddingLeft: 3, color: "white" }}>
          <Typography component="h5">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "80%",
        margin: "auto",
      }}
    >
      <Box
        component="div"
        sx={{
          flexGrow: 1,
          display: "flex",
          height: 300,
          backgroundColor: "transparent",
          borderTop: 1,
          borderBottom: 1,
          borderColor: "#71C0D8",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          visibleScrollbar
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="experience"
          // @ts-ignore: Unreachable code error
          TabIndicatorProps={{ style: { background: "#3d3afb" } }}
          sx={{
            paddingTop: "2rem",
          }}
        >
          {experience.map(({ company }, index) => (
            <Tab
              label={company}
              {...a11yProps(index)}
              sx={{
                fontSize: 14,
                fontFamily: "PT Serif",
                textTransform: "none",
                borderRight: 2,
                borderColor: "#71C0D8",
                color: "white",
                "&.Mui-selected": {
                  color: "rgb(165, 255, 165)",
                },
              }}
            />
          ))}
        </Tabs>
        {experience.map(({ company, position }, index) => (
          <TabPanel value={value} index={index}>
            {position}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
