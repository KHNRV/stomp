import { createMuiTheme } from "@material-ui/core/styles";

// CSS colors
// $dark: "#08253f";
// $blue: "#2980ba";
// $yellow: "#dfad3e";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#dfad3e",
    },
    secondary: {
      main: "#2980ba",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  appBar: {
    maxWidth: '500px', 

  },
});

export default theme;
