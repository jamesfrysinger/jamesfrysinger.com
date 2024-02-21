import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[600],
    },
    text: {
      primary: grey[600],
      secondary: grey[600],
    },
  },
  typography: {
    fontFamily: "Avenir",
  },
  components: {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: "rgb(212 212 212)",
          },
          "@media (prefers-color-scheme: dark)": {
            "&:before": {
              borderBottomColor: "rgb(64, 64, 64)",
            },
          },
        },
        root: {
          minHeight: "55px",
          fontSize: "16px",
          color: "#000000",
          "@media (prefers-color-scheme: dark)": {
            color: "rgb(212,212,212)",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "@media (prefers-color-scheme: dark)": {
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
            },
            color: "#000000",
            backgroundColor: "rgba(255,255,255,0.7)",
          },
          borderRadius: 0,
          minHeight: "55px",
          textTransform: "initial",
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
