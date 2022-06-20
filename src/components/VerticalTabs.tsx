import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import RightArrow from "@mui/icons-material/ArrowRight";

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
        <Box
          component="h5"
          sx={{
            paddingLeft: 3,
            color: "white",
            height: 280,
            overflow: "auto",
            width: 900,
            "@media (max-width:650px)": {
              width: 300,
            },
          }}
        >
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
    "@media (max-width:650px)": {
      "aria-controls": `horizontal-tabpanel-${index}`,
    },
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      <Tabs
        orientation="vertical"
        variant={"scrollable"}
        visibleScrollbar
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        aria-label="experience"
        // @ts-ignore: Unreachable code error
        TabIndicatorProps={{
          style: { background: "rgb(165, 255, 165)" },
        }}
        sx={{
          height: 320,
          paddingTop: 3,
        }}
      >
        {experience.map(({ company }, index) => (
          <Tab
            label={company}
            {...a11yProps(index)}
            sx={{
              fontSize: 16,
              fontFamily: "PT Serif",
              textTransform: "none",
              borderRight: 2,
              borderColor: "rgb(113,192,216,.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgb(15,15,60)",
                fontSize: 16.25,
              },
              "&.Mui-selected": {
                color: "rgb(165, 255, 165,1)",
              },
            }}
          />
        ))}
      </Tabs>
      {experience.map(({ position, dates, years, tasks }, index) => (
        <TabPanel value={value} index={index}>
          <>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography sx={{ color: "rgb(165, 255, 165)", width: "100%" }}>
                  {position}
                </Typography>
              </Grid>
              {!isMobile && (
                <Grid item xs={4}>
                  <Typography sx={{ color: "rgb(113,192,216,.75)" }}>
                    {dates}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={3}>
                <Typography sx={{ color: "rgb(113,192,216,1)" }}>
                  {years["years"]} {years["years"] !== 1 ? "years" : "year"}{" "}
                  {years["months"]} {years["months"] !== 1 ? "months" : "month"}
                </Typography>
              </Grid>
            </Grid>
            {
              <Box component="div">
                <List>
                  {tasks.map((tasks) => (
                    <ListItem disablePadding>
                      <ListItemButton>
                        <RightArrow
                          fontSize="large"
                          sx={{ color: "#3d3afb" }}
                        />
                        <ListItemText
                          primary={tasks}
                          primaryTypographyProps={{
                            style: { fontSize: "1.1rem" },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            }
          </>
        </TabPanel>
      ))}
    </>
  );
}
