import { createTheme, responsiveFontSizes } from "@mui/material";

export const DarkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#050A30",
      },
      secondary: {
        main: "#71C0D8",
      },
      background: {
        default: "#050A30",
      },
      foreground: {
        default: "white",
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontFamily: "PT Serif",
        fontWeight: 500,
      },
      h3: {
        fontWeight: 300,
        fontFamily: "PT Serif",
      },
      h: {
        fontWeight: 300,
        fontFamily: "PT Serif",
      },
      h5: {
        fontWeight: 500,
        fontFamily: "PT Serif",
      },
      body1: {
        fontWeight: 500,
        fontFamily: "PT Serif",
      },
      div: {
        fontWeight: 500,
        fontFamily: "PT Serif",
      },
    },
    components: {
      MuiCssBaseline: {
        "@global": {
          body: {
            color: "white",
            backgroundColor: '"#ff5cb8"',
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            backgroundColor: "#3d3afb",
            opacity: ".8",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: "Roboto Mono, monospace",
            backgroundColor: "#ff5cb8",
            color: "white",
            fontSize: 11,
          },
        },
      },
    },
  })
);
