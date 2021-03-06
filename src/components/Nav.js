import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Grid, Toolbar } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import Menu from "./Menu";

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
    margin: "0.5em",
    marginLeft: "1.5em",
  },
  button: {},
}));

export default function Nav({ action }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color="primary" position="static">
        <Box component={Link} to="/" mr={2}>
          <img className={classes.logo} height="35px" src="/logo.png" alt="" />
        </Box>
        <Grid container justify={"flex-end"}>
          <Toolbar>
            <Menu action={action} />
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}
