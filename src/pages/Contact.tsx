import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SectionHeading from '../components/SectionHeading';
import { social } from '../utils/social';

const contactStyle = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  backgroundColor: '#050A30',
  color: 'white',
  height: '90vh',
  margin: 'auto',
};

const containerStyle = {
  width: '50%',
  '@media (max-width:650px)': {
    width: '80%',
  },
  border: 1,
  borderColor: '#30D5C8',
  padding: '3rem',
  boxShadow: '6px 8px 15px #30D5C8',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '2rem',
};

const buttonStyle = {
  backgroundColor: 'rgb(113,192,216,1)',
  color: 'black',
  '&:hover': {
    backgroundColor: '#71C0D8',
  },
};

export default function Home() {
  return (
    <>
      <SectionHeading>Get in touch</SectionHeading>
      <Box component="div" style={contactStyle}>
        <Box component="h2" sx={containerStyle}>
          <Typography component="h3" variant="h3" color="#30D5C8" align="center" sx={{ paddingBottom: '2rem' }}>
            Contact Me
          </Typography>
          <Typography component="h5" color="white" align="center" variant="h6">
            I'm always interested in hearing from you with any thoughts or questions. I'll do my best to get back to you
            as promptly as possible.
          </Typography>
          <Box component="div" sx={buttonContainerStyle}>
            <Button variant="contained" href={social[0].url} sx={buttonStyle}>
              Email
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
