import { createMuiTheme } from "@material-ui/core/styles";

// CSS colors
// $dark: "#08253f";
// $blue: "#2980ba";
// $yellow: "#dfad3e";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2980ba",
    },
    secondary: {
      main: "#bd4033",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
