import { createMuiTheme } from "@material-ui/core/styles";

// CSS colors
// $dark: "#001427";
// $blue: "#2980ba";
// $yellow: "#dfad3e";
// $red: "#bd4033";
// $white: "#f5f5f5";
// $purple: "#69385C"

// font-family: 'Denk One', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Yantramanav', sans-serif;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1f1f1f",
    },
    secondary: {
      main: "#F7F7F7",
    },
    text: {
      primary: "#001427",
    },
  },
  typography: {
    fontFamily: [
      "'Poppins', sans-serif",
      "'Denk One', sans-serif",
      "'Yantramanav', sans-serif",
    ],
    fontSize: 15,
  },
  appBar: {
    maxWidth: "500px",
  },
});

export default theme;
