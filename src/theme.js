import { createMuiTheme } from "@material-ui/core/styles";

// CSS colors
// $dark: "#001427";
// $blue: "#2980ba";
// $yellow: "#dfad3e";
// $red: "#bd4033";
// $white: "#f5f5f5";
// $purple: "#69385C"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#dfad3e",
    },
    secondary: {
      main: "#2980ba",
    },
    text: {
      primary: "#001427"
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
