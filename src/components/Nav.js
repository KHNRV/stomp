import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    minHeight: 90,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    // position: "absolute",
    margin: "0.5em",
    marginLeft: "1.5em",
  },
  button: {},
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="primary" position="static">
        <Box mr={2}>
          <img className={classes.logo} height="50px" src="/logo.png" alt="" />
        </Box>
        <Grid container justify={"flex-end"}>
          <Toolbar>
            {/* DBLOGIC */}

            {true ? ( //FOR now set true false for logged in
              <Button
                component={Link}
                to="/"
                color="inherit"
                className={classes.button}
                endIcon={
                  <img
                    height="30px"
                    src="/buttons/dashboard.svg"
                    alt="dashboard"
                  />
                }
              >
                Dashboard
              </Button>
            ) : (
              <div className="user-notlogged">
                <Button component={Link} to="/login" color="inherit">
                  Login
                </Button>
                <Button component={Link} to="/signup" color="inherit">
                  Sign up
                </Button>
              </div>
            )}
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}
