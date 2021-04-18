import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

import Dashboard from "./Dashboard";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles({
  list: {
    width: 250,
    display: "flex",
  },
  fullList: {
    height: "30vh",
    width: "auto",
  },
});

export default function Menu({action}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
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
        [classes.fullList]: anchor === "right",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Dashboard action={action}/>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="nav-items">
        <Button
        disableRipple
          key="right"
          color="inherit"
          className={classes.button}
          endIcon={
            <img height="30px" src="/buttons/dashboard.svg" alt="dashboard" />
          }
          onClick={toggleDrawer("right", true)}
        >
          Menu
        </Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </div>
    </ThemeProvider>
  );
}
