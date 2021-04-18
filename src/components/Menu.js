import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";


import Dashboard from './Dashboard'

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Menu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Dashboard />

    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <Button
        key="bottom"
        color="inherit"
        className={classes.button}
        endIcon={
          <img height="30px" src="/buttons/dashboard.svg" alt="dashboard" />
        }
        onClick={toggleDrawer("bottom", true)}
      >
        Dashboard
      </Button>
      <SwipeableDrawer
        anchor={"bottom"}
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
      >
        {list("bottom")}
      </SwipeableDrawer>
    </ThemeProvider>
  );
}
