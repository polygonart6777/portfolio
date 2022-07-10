import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import RightArrow from '@mui/icons-material/ArrowRight';
import TabPanel from './TabPanel';
import { experience } from '../utils/experience.js';

const tabsGroupStyle = {
  fontSize: 12,
  fontFamily: 'PT Serif',
  textTransform: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgb(15,15,60)',
    fontSize: 12.25,
  },
  '&.Mui-selected': {
    color: '#30D5C8',
  },
};

const tabStyle = {
  fontSize: 12,
  fontFamily: 'PT Serif',
  textTransform: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgb(15,15,60)',
    fontSize: 12.25,
  },
  '&.Mui-selected': {
    color: '#30D5C8',
  },
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HorizontalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box component="div" sx={{ width: '100%' }}>
      <Box component="div">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="experience"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          // @ts-ignore: Unreachable code error
          TabIndicatorProps={{
            style: { background: '#30D5C8' },
          }}
          sx={tabsGroupStyle}
        >
          {experience.map(({ company }, index) => (
            <Tab key={index} label={company} sx={tabStyle} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {experience.map(({ position, dates, tasks }, index) => (
        <TabPanel key={index} value={value} index={index}>
          <>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography
                  sx={{
                    color: '#30D5C8',
                    width: '100%',
                    paddingLeft: '1rem',
                  }}
                >
                  {position}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ color: 'rgb(113,192,216,.75)', fontSize: 12 }}>{dates}</Typography>
              </Grid>
            </Grid>
            {
              <Box
                component="div"
                sx={{
                  width: '100%',
                  height: 400,
                }}
              >
                <List>
                  {tasks.map((tasks) => (
                    <ListItem key={tasks} disablePadding>
                      <ListItemButton>
                        <RightArrow fontSize="medium" sx={{ color: '#3d3afb' }} />
                        <ListItemText
                          primary={tasks}
                          primaryTypographyProps={{
                            style: { fontSize: '.8rem' },
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
    </Box>
  );
}
