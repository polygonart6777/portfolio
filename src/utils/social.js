import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const iconStyle = {
  marginBottom: '3px',
  color: 'black',
  '@media (min-width:500px)': { marginTop: '3px' },
};

export const social = [
  {
    network: 'Google',
    username: 'buricd6777@gmail.com',
    url: 'mailto:buricd6777@gmail.com',
    icon: <GoogleIcon sx={iconStyle} />,
  },
  {
    network: 'LinkedIn',
    username: 'buricd',
    url: 'https://www.linkedin.com/in/dina-buric-a954ba193',
    icon: <LinkedInIcon sx={iconStyle} />,
  },
  {
    network: 'GitHub',
    username: 'polygonart6777',
    url: 'https://github.com/polygonart6777',
    icon: <GitHubIcon sx={iconStyle} />,
  },
  {
    network: 'Twitter',
    username: 'polygonart6777',
    url: 'https://twitter.com/polygonart6777',
    icon: <TwitterIcon sx={iconStyle} />,
  },
];
