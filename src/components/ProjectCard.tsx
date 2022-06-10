import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SurfingIcon from "@mui/icons-material/Surfing";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  hrefPage: string;
  hrefCode: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  hrefPage,
  hrefCode,
}: ProjectCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 320,
        borderRadius: "2.5%",
        borderColor: "#3d3afb",
        boxShadow: "7px 10px 15px rgb(255,0,255,.5)",
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
          transform: "scale3d(1.025, 1.025, 1)",
        },
      }}
      variant="outlined"
    >
      <CardActionArea href={hrefPage} target="_blank" rel="noreferrer">
        <CardHeader
          title={title}
          action={
            <div style={{ paddingTop: ".35rem" }}>
              {hrefCode && (
                <IconButton
                  aria-label="settings"
                  size="small"
                  href={hrefCode}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#71C0D8",
                    },
                  }}
                >
                  <GitHubIcon
                    sx={{
                      color: "#71C0D8",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                    fontSize="small"
                  />
                </IconButton>
              )}
              <IconButton
                aria-label="settings"
                size="small"
                href={hrefPage}
                target="_blank"
                rel="noreferrer"
                sx={{
                  "&:hover": {
                    backgroundColor: "#71C0D8",
                  },
                }}
              >
                <SurfingIcon
                  sx={{
                    color: "#71C0D8",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                  fontSize="small"
                />
              </IconButton>
            </div>
          }
          sx={{
            backgroundColor: "#050A30",
            color: "#30D5C8",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "12rem",
            backgroundColor: "#050A30",
          }}
        >
          <Typography
            variant="body2"
            color="#71C0D8"
            sx={{ paddingBottom: ".5rem" }}
          >
            {description}
          </Typography>
          <div style={{ display: "flex", alignItems: "flex-end", flexGrow: 1 }}>
            {tech.map((techElement) => (
              <Typography
                key={techElement}
                variant="body2"
                color="#71C0D8"
                sx={{
                  fontSize: ".75rem",
                  paddingBottom: ".5rem",
                  paddingInline: ".3rem",
                  fontFamily: "Space Mono",
                }}
              >
                {techElement}
              </Typography>
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
