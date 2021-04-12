import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },

}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar title={<img src="logo.png"/>} color="secondary" position="static">
        <Box mr={5}>
  
        </Box>
        <Toolbar>
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
      </AppBar>
    </div>
  );
}
