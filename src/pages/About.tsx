import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import image from "../images/aboutMe.jpg";
import styles from "./About.module.scss";

const imgContainerStyle = {
  height: 400,
  width: 550,
  maxHeight: { xs: 233, md: 400 },
  maxWidth: { xs: 350, md: 550 },
  margin: "auto",
};

const textContainerStyle = {
  height: 400,
  width: 550,
  maxHeight: { xs: 233, md: 200 },
  maxWidth: { xs: 350, md: 400 },
  margin: "auto",
  marginTop: "1rem",
};

export default function Home() {
  return (
    <div id="about" className={styles.About}>
      <Grid container>
        <Grid item xs={6}>
          <Box
            component="img"
            sx={imgContainerStyle}
            alt="Dina at Baker"
            src={image}
          />
        </Grid>
        <Grid item xs={6}>
          <Box component="h4" sx={textContainerStyle}>
            <Typography color="#30D5C8" align="center">
              My name is{" "}
              <Typography display="inline" color="white" fontWeight="Bold">
                Dina
              </Typography>{" "}
              and I work at the intersection of math, art, and technology. It
              all started when I was a teacher trying to communicate
              mathematical topics in a tangible way to my students, through
              animations, 3d printing and laser cutting.
            </Typography>
            <Typography sx={{ paddingTop: "1rem" }} align="center">
              Along the way I learned a few languages (thank you Illustrating
              Mathematics group) and have been developing software ever since.
            </Typography>
            <Typography
              sx={{ paddingTop: "1rem" }}
              color="#71C0D8"
              align="center"
            >
              Currently, I'm curious about the influence of machine learning
              algorithms on mathematics and vice versa.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
