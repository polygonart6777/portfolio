import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Social from "../components/Social";
import Torus from "../components/Torus";

const layoutStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  displayContent: "center",
  width: "100%",
  height: "90vh",
  zIndex: "10",
};

const gridStyle = {
  position: "absolute",
  fontWeight: "medium",
  paddingLeft: "10rem",
  displayContent: "center",
  top: "14rem",
  "@media (max-width:650px)": { top: "10rem", paddingLeft: "2rem" },
  zIndex: "10",
};

const titleStyle = {
  fontWeight: "bold",
  zIndex: "5",
};

const canvasStyle = {
  height: "100%",
  width: "100%",
  overflow: "scroll",
};
const subtitleStyle = {
  textAlign: "start",
  zIndex: "10",
  "@media (max-width:650px)": { width: "200px" },
  wordWrap: "break-word",
};

export default function Home() {
  const isMobile = useMediaQuery("(max-width:650px)");
  return (
    <>
      <div style={layoutStyle}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={gridStyle}
          rowSpacing={1}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              component="h2"
              color="#71C0D8"
              sx={titleStyle}
            >
              Dr. Dina Buric
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              color="white"
              sx={subtitleStyle}
            >
              Software developer and math artist
            </Typography>
          </Grid>
        </Grid>
        <Canvas style={canvasStyle}>
          <OrbitControls enableZoom={false} enabled={isMobile ? false : true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Torus></Torus>
        </Canvas>
      </div>
      <Hidden smDown>
        <Social />
      </Hidden>
      <Box
        component="div"
        sx={{
          position: "absolute",
          bottom: "2rem",
          left: "11rem",
          zIndex: "100",
        }}
      >
        <Hidden smUp>
          <IconButton
            size="large"
            sx={{
              backgroundColor: "#71C0D8",
              opacity: ".75",
              "&:hover": {
                backgroundColor: "rgb(255,0,255,.5)",
                transition: "all 0.5s ease",
              },
            }}
          >
            <ExpandMoreIcon sx={{ fontColor: "black" }} />
          </IconButton>
        </Hidden>
      </Box>
    </>
  );
}
