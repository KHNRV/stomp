import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    margin: "none",
    padding: "none",
    backgroundImage: "url('/docs/status.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    minHeight: "100vh",
    width: "100vw",
  },
  image: {
    // position: "absolute",
    minHeight: "100vh",
    width: "100%",
    objectFit: "cover",
  },
  statustext: {
    paddingTop: "1em",
  },
  button: {
    marginTop: "1em",
  },
});

export default function Status({isLoggedIn}) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.statustext}>
        Woops... Are you lost?
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={isLoggedIn ? "/competitions" : "/login"}
        className={classes.button}
      >
        Take me Back
      </Button>
    </Box>
  );
}
