import React from "react";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";
import { projects } from "../utils/projects.js";

const gridStyle = {
  width: "80%",
  margin: "auto",
  marginTop: "4rem",
};

export default function Projects() {
  return (
    <>
      {/* <Typography
        color="#71C0D8"
        variant="h4"
        sx={{ paddingBottom: "1rem", paddingTop: "1rem", marginLeft: "2.5rem" }}
      >
        Projects
      </Typography> */}
      <div>
        <Grid container columnSpacing={0.5} rowSpacing={6} sx={gridStyle}>
          {projects.map(({ title, description, tech, hrefPage, hrefCode }) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
              key={title}
            >
              <ProjectCard
                key={title}
                title={title}
                description={description}
                tech={tech}
                hrefPage={hrefPage}
                hrefCode={hrefCode}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
