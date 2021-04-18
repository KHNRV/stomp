import { createMuiTheme } from "@material-ui/core/styles";

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
  shape: {
    borderRadius: 5,
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
    tabs:{
      indicator: {
        top: "0px"
      }
    }
  },

});

export default theme;
