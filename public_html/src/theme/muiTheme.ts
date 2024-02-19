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
      primary: grey[800],
      secondary: grey[600],
    },
  },
  typography: {
    fontFamily: "Avenir",
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "none",
          },
        },
        root: {
          height: "55px",
          backgroundColor: "rgba(0, 0, 0, 0.03)",
          fontSize: "16px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 0,
          height: "55px",
          textTransform: "initial",
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
