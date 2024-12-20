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
import useMediaQuery from '@mui/material/useMediaQuery';

import RightArrow from '@mui/icons-material/ArrowRight';

import TabPanel from './TabPanel';
import { experience } from '../utils/experience.js';

const tabStyle = {
  fontSize: 18,
  fontFamily: 'PT Serif',
  textTransform: 'none',
  borderRight: 2,
  borderColor: 'rgb(113,192,216,.5)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgb(15,15,60)',
    fontSize: 18.25,
  },
  '&.Mui-selected': {
    color: '#30D5C8',
  },
  '@media (max-width:920px)': {
    fontSize: 12,
    '&:hover': {
      fontSize: 12.25,
    },
  },
};

const gridPanelStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const isDesktop = useMediaQuery('(min-width:920px)');

  return (
    <>
      <Tabs
        orientation="vertical"
        variant={'standard'}
        value={value}
        onChange={handleChange}
        aria-label="experience"
        // @ts-ignore: Unreachable code error
        TabIndicatorProps={{
          style: { background: '#30D5C8' },
        }}
        sx={{
          height: 380,
          paddingTop: 12,
        }}
      >
        {experience.map(({ company }, index) => (
          <Tab key={company} label={company} {...a11yProps(index)} sx={tabStyle} />
        ))}
      </Tabs>
      {experience.map(({ position, dates, years, tasks }, index) => (
        <TabPanel key={position} value={value} index={index}>
          <>
            <Grid container sx={gridPanelStyle}>
              <Grid item sm={6} md={5}>
                <Box
                  component="div"
                  sx={{
                    color: '#30D5C8',
                    width: '100%',
                    fontSize: 22,
                  }}
                >
                  {position}
                </Box>
              </Grid>
              {isDesktop && (
                <Grid item xs={4}>
                  <Typography sx={{ color: 'rgb(113,192,216,.75)', fontSize: 12 }}>{dates}</Typography>
                </Grid>
              )}
              <Grid item sm={6} md={3} sx={{ paddingRight: '1rem' }}>
                <Typography sx={{ color: 'rgb(113,192,216,1)', fontSize: 12 }}>
                  {years['years'] > 1 && years['years']}{' '}
                  {years['years'] > 1 ? 'years' : years['years'] === 1 ? 'year' : ''} {years['months']}{' '}
                  {years['months'] !== 1 ? 'months' : 'month'}
                </Typography>
              </Grid>
            </Grid>
            {
              <Box component="div" sx={{ paddingTop: '1rem', maxWidth:'800px' }}>
                <List>
                  {tasks.map((tasks) => (
                    <ListItem disablePadding key={tasks}>
                      <ListItemButton>
                        <RightArrow fontSize={isDesktop ? 'large' : 'medium'} sx={{ color: '#3d3afb' }} />
                        <ListItemText
                          primary={tasks}
                          sx={{
                            fontSize: 18,
                            '@media (max-width:920px)': {
                              fontSize: 12,
                            },
                          }}
                          disableTypography
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
