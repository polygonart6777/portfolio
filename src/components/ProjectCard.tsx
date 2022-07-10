import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CardActionArea } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SurfingIcon from '@mui/icons-material/Surfing';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  hrefPage: string;
  hrefCode: string;
};

const cardStyle = {
  maxWidth: 340,
  border: 2,
  borderColor: '#3d3afb',
  boxShadow: '7px 10px 15px rgb(255,0,255,.5)',
  outline: 'none',
  backgroundColor: '#050A30',
  '&:hover': {
    transition: 'transform 0.1s ease-in-out',
    transform: 'scale(1.025)',
    border: 2,
    borderColor: '#3d3afb',
    backgroundColor: '#050A30',
  },
  '@media (max-width:500px)': {
    maxWidth: 300,
  },
};

const techElementStyle = {
  fontSize: 13,
  color: '#71C0D8',
  paddingBottom: '.5rem',
  paddingInline: '.3rem',
  fontFamily: 'Space Mono',
  '@media (max-width:500px)': {
    fontSize: '.7rem',
  },
};

const iconStyle = {
  color: '#71C0D8',
  '&:hover': {
    color: 'black',
  },
};

const cardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '12rem',
  backgroundColor: '#050A30',
};

export default function ProjectCard({ title, description, tech, hrefPage, hrefCode }: ProjectCardProps) {
  return (
    <Card sx={cardStyle}>
      <CardActionArea href={hrefPage} target="_blank" rel="noreferrer">
        <>
          <CardHeader
            title={title}
            action={
              <Box sx={{ paddingTop: '.35rem' }} component="div">
                {hrefCode && (
                  <IconButton
                    aria-label="settings"
                    size="small"
                    href={hrefCode}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      '&:hover': {
                        backgroundColor: '#71C0D8',
                      },
                    }}
                  >
                    <GitHubIcon sx={iconStyle} fontSize="small" />
                  </IconButton>
                )}
                <IconButton
                  aria-label="settings"
                  size="small"
                  href={hrefPage}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#71C0D8',
                    },
                  }}
                >
                  <SurfingIcon sx={iconStyle} fontSize="small" />
                </IconButton>
              </Box>
            }
            sx={{
              backgroundColor: '#050A30',
              color: '#30D5C8',
            }}
          />
          <CardContent sx={cardContentStyle}>
            <Typography color="#71C0D8" sx={{ paddingBottom: '.5rem' }}>
              {description}
            </Typography>
            <Box component="div" sx={{ display: 'flex', alignItems: 'flex-end', flexGrow: 1 }}>
              {tech.map((techElement) => (
                <Box key={techElement} component="div" sx={techElementStyle}>
                  {techElement}
                </Box>
              ))}
            </Box>
          </CardContent>
        </>
      </CardActionArea>
    </Card>
  );
}
