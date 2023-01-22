import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from './Drawer';

import { navigationLinks } from '../utils/navigation.js';

const navBarStyle = {
  backgroundColor: '#050a30',
  paddingTop: '1rem',
  display: 'flex',
  paddingRight: '1rem',
  justifyContent: 'flex-end',
  div: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontFamily: 'PT Serif',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#71C0D8',
    },
  },
};

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <AppBar position="sticky" style={{ boxShadow: 'none' }}>
      <Toolbar sx={navBarStyle}>
        <>
          <Hidden smDown>
            {navigationLinks.map(({ name, id }) => (
              <Box key={id} component="div" sx={{ fontSize: 25, paddingLeft: '1rem', paddingRight: '1rem' }}>
                <HashLink smooth to={`#${id}`}>
                  {name}
                </HashLink>
              </Box>
            ))}
          </Hidden>
          <Hidden smUp>
            <>
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon fontSize="large" sx={{ color: 'white' }} />
              </IconButton>
              <Drawer open={openDrawer} setOpen={setOpenDrawer} />
            </>
          </Hidden>
        </>
      </Toolbar>
    </AppBar>
  );
}
