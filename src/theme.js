import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "rgba(220, 19, 19, 1)" },
    background: { paper: "rgba(246, 246, 246, 1)", default: "#fafafa" },
    primary: {
      light: "rgba(122, 231, 255, 1)",
      main: "rgba(14, 166, 201, 1)",
      dark: "rgba(3, 82, 100, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(255, 178, 106, 1)",
      main: "rgba(255, 124, 0, 1)",
      dark: "rgba(175, 88, 4, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export default theme