import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './NavBar.module.scss';
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
  },
};

export default function NavBar() {
  return (
    <AppBar position="sticky" style={{ boxShadow: 'none' }}>
      <Toolbar sx={navBarStyle}>
        {navigationLinks.map(({ name, id }) => (
          <Box key={id} component="div" sx={{ fontSize: 25, paddingLeft: '1rem', paddingRight: '1rem' }}>
            <HashLink smooth to={`#${id}`}>
              {name}
            </HashLink>
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
}
