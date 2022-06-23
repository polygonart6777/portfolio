import React from "react";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";

import SectionHeading from "../components/SectionHeading";
import { projects } from "../utils/projects.js";

const gridStyle = {
  height: "90vh",
  width: "85%",
  margin: "auto",
  marginTop: "4rem",
  overflow: "auto",
  "@media (max-width:500px)": {
    width: "100%",
    paddingLeft: "2.2rem",
  },
};

export default function Projects() {
  return (
    <>
      <SectionHeading>My projects</SectionHeading>
      <Grid container columnSpacing={1} rowSpacing={1} sx={gridStyle}>
        {projects.map(({ title, description, tech, hrefPage, hrefCode }) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            xl={3}
            key={title}
            sx={{ paddingBottom: "2rem" }}
          >
            <ProjectCard
              title={title}
              description={description}
              tech={tech}
              hrefPage={hrefPage}
              hrefCode={hrefCode}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
