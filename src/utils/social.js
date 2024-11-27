import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import SvgIcon from '@mui/material/SvgIcon';

const iconStyle = {
  marginBottom: '3px',
  color: 'black',
  '@media (min-width:500px)': { marginTop: '3px' },
};

export const social = [
  {
    network: 'Google',
    username: 'dina.m.buric@gmail.com',
    url: 'mailto:dina.m.buric@gmail.com',
    icon: <GoogleIcon sx={iconStyle} />,
  },
  {
    network: 'LinkedIn',
    username: 'buricd',
    url: 'https://www.linkedin.com/in/dina-buric',
    icon: <LinkedInIcon sx={iconStyle} />,
  },
  {
    network: 'GitHub',
    username: 'polygonart6777',
    url: 'https://github.com/polygonart6777',
    icon: <GitHubIcon sx={iconStyle} />,
  },
  {
    network: 'Mastodon',
    username: 'polygonart6777',
    url: 'https://mathstodon.xyz/@Polygonart6777',
    icon:    <SvgIcon sx={iconStyle}>
    <svg className="mastodon" width="25" height="25" fill="currentColor" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="m10.751 11.617c1.7387-0.20699 3.2514-1.2721 3.4412-2.2449 0.30012-1.5334 0.27598-3.7421 0.27598-3.7421 0-2.9926-1.9715-3.8706-1.9715-3.8706-0.99355-0.45451-2.7002-0.6451-4.4734-0.65976h-0.043122c-1.774 0.014661-3.48 0.20526-4.4734 0.65976 0 0-1.9706 0.87709-1.9706 3.8706l-0.00173 0.57093c-0.00345 0.55195-0.00603 1.1643 0.0095 1.8033 0.071582 2.9271 0.53988 5.8128 3.26 6.5286 1.2539 0.33031 2.3311 0.39931 3.1988 0.35188 1.5722-0.08625 2.4554-0.55799 2.4554-0.55799l-0.05176-1.1358s-1.1237 0.3536-2.3864 0.31047c-1.2505-0.04312-2.57-0.13454-2.7728-1.6628a3.1169 3.1169 0 0 1-0.028456-0.42777s1.2281 0.2984 2.784 0.36912c0.95126 0.04312 1.843-0.0552 2.7495-0.163zm1.3911-2.1302h-1.4429v-3.5188c0-0.74083-0.31393-1.1168-0.94091-1.1168-0.69339 0-1.041 0.44587-1.041 1.329v1.9258h-1.4351v-1.9266c0-0.88313-0.34756-1.329-1.041-1.329-0.62699 0-0.94091 0.37602-0.94091 1.1177v3.5179h-1.4429v-3.6239c0-0.74083 0.18973-1.329 0.56921-1.7646 0.39327-0.43553 0.90728-0.6589 1.5463-0.6589 0.73824 0 1.2971 0.28288 1.6671 0.84777l0.35964 0.5994 0.35964-0.5994c0.36998-0.5649 0.92884-0.84777 1.668-0.84777 0.6382 0 1.1522 0.22337 1.5446 0.6589 0.38119 0.43553 0.57007 1.0237 0.57007 1.7646z" strokeWidth=".86244" />
    </svg>
  </SvgIcon>,
  },
];
