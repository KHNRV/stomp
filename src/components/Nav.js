import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Icon from "@material-ui/core/Icon";

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
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    position: "absolute",
    marginLeft: "3em",
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="secondary" position="static">
        <Box mr={2}>
          <img className={classes.logo} height="55px" src="/logo.png" alt="" />
        </Box>
        <Grid container justify={"flex-end"}>
          <Toolbar>
            {/* DBLOGIC */}

            {true ? ( //FOR now set true false for logged in
              <Button
                href="/"
                // variant="outlined"
                color="dark"
                className={classes.button}
                endIcon={<Icon>dashboard</Icon>}
              >
                Dashboard
              </Button>
            ) : (
              <div className="user-notlogged">
                <Button href="/login" color="inherit">
                  Login
                </Button>
                <Button href="/signup" color="inherit">
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
