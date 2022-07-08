import React from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import { social } from '../utils/social.js';
import styles from './NavBar.module.scss';

const iconButtonStyle = {
  display: 'block',
  height: '2.5rem',
  width: '2.5rem',
  opacity: '.5',
  backgroundColor: '#3d3afb',
  '&:hover': {
    backgroundColor: '#71C0D8',
    opacity: '1',
    transition: 'all 0.5s ease',
  },
};

interface ToolbarMobileProps {
  setOpen: (arg0: boolean) => void;
}

export default function ToolbarMobile({ setOpen }: ToolbarMobileProps) {
  return (
    <Toolbar disableGutters className={styles.NavBar}>
      <Grid container direction="row" justifyContent="flex-end">
        {social.map((socialItem: any) => (
          <Grid item xs={2} sx={{ paddingTop: '.75rem' }}>
            <IconButton
              sx={iconButtonStyle}
              color="inherit"
              href={socialItem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialItem.icon}
            </IconButton>
          </Grid>
        ))}
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '.25rem',
          }}
        >
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon fontSize="large" sx={{ color: 'white' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  );
}
