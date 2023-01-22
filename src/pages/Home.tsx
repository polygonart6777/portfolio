import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import resume from '../utils/DinaBuricResume.pdf';

import Social from '../components/Social';
import Torus from '../components/Torus';

const layoutStyle = {
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  displayContent: 'center',
  width: '100%',
  height: '90vh',
  zIndex: '10',
};

const gridStyle = {
  position: 'absolute',
  fontWeight: 'medium',
  paddingLeft: '10rem',
  displayContent: 'center',
  top: '14rem',
  '@media (max-width:650px)': { top: '10rem', paddingLeft: '2rem' },
  zIndex: '10',
};

const titleStyle = {
  fontWeight: 'bold',
  zIndex: '5',
};

const canvasStyle = {
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
};

const overlay = {
  position: 'fixed',
  top: '3rem',
  left: 0,
  width: '100%',
  height: '90vh',
};

const subtitleStyle = {
  textAlign: 'start',
  zIndex: '10',
  '@media (max-width:650px)': { width: '200px' },
  wordWrap: 'break-word',
};

const buttonStyle = {
  backgroundColor: '#3d3afb',
  color: 'black',
  '&:hover': {
    backgroundColor: '#ff5cb8',
  },
};

export default function Home() {
  const isMobile = useMediaQuery('(max-width:650px)');

  return (
    <>
      <div style={layoutStyle}>
        <Canvas style={canvasStyle}>
          <OrbitControls enableZoom={false} enabled={!isMobile} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Torus isMobile={isMobile}></Torus>
        </Canvas>
        <Grid container direction="row" justifyContent="center" sx={gridStyle} rowSpacing={1}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h2" color="#71C0D8" sx={titleStyle}>
              Dina Buric, PhD
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" color="white" sx={subtitleStyle}>
              Software developer and math artist
            </Typography>
          </Grid>
          <Grid item xs={12} alignItems="center" sx={{ marginTop: '2rem' }}>
            <Button variant="contained" sx={buttonStyle} href={resume} target="_blank">
              Resume
            </Button>
          </Grid>
        </Grid>
      </div>
      <Social />
      <Hidden smUp>
        <Box component="div" sx={overlay} />
      </Hidden>
    </>
  );
}
