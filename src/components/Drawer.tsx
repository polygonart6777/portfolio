import React from 'react';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Link from '@mui/material/Link';

import { navigationLinks } from '../utils/navigation.js';

interface DrawerProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}
export default function Drawer({ open, setOpen }: DrawerProps) {
  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      anchor="right"
      PaperProps={{
        sx: {
          backgroundColor: '#242296',
          color: 'white ',
        },
      }}
    >
      <List>
        {navigationLinks.map(({ name, id }) => (
          <ListItem key={id} onClick={() => setOpen(false)}>
            <ListItemButton
              component={Link}
              href={`#${id}`}
              sx={{
                '&:hover': {
                  backgroundColor: '#3634e1',
                  transform: 'scale3d(1.05, 1.05, 1)',
                },
              }}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
}
