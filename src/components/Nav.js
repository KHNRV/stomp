import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Stomp
          </Typography>
          {true ? ( //FOR now set true false for logged in
            <Button
              href="/"
              variant="contained"
              color="tertiary"
              className={classes.button}
              endIcon={<Icon>dashboard</Icon>}
            >
              Dashboard
            </Button>
          ) : (
            <div className="user-notlogged">
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign up</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
