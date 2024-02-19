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
    MuiFilledInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: "transparent",
          },
          "&:after": {
            borderBottomColor: "transparent",
          },
        },
        root: {
          backgroundColor: "rgba(136, 136, 136, 0.06)",
          height: "55px",
          fontSize: "16px",
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
