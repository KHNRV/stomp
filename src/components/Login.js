import React, { useCallback, useRef, useState } from "react";

import {
  Avatar,
  Button,
  Box,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/329064/)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // This is for Login Help
  main: {
    marginTop: "5em",
    backgroundColor: "rgba(253, 200, 69, .3)",
    border: `2px solid rgba(253, 200, 69, .5)`,
    padding: "2em",
    borderRadius: "1em",
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [status, setStatus] = useState(null);

  const loginEmail = useRef();
  const loginPassword = useRef();

  const login = useCallback(() => {
    setStatus(null);
    if (loginEmail.current.value !== "test@stomp.com") {
      setTimeout(() => {
        setStatus("invalidEmail");
      }, 10);
    } else if (loginPassword.current.value !== "123") {
      setTimeout(() => {
        setStatus("invalidPassword");
      }, 10);
    } else {
      setTimeout(() => {
        history.push("/");
      }, 150);
    }
  }, [loginEmail, loginPassword, setStatus]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Box className={classes.logo} mr={2}>
            <img height="100" src="/logo-dark.png" alt="" />
          </Box>
          <Avatar className={classes.avatar}>
            <img height="30" src="/buttons/lock.svg" alt="login" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <TextField
              variant="outlined"
              inputRef={loginEmail}
              error={status === "invalidEmail"}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              onChange={() => {
                if (status === "invalidEmail") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidEmail" &&
                "This email address isn't associated with an account."
              }
              FormHelperTextProps={{ error: true }}
            />
            <TextField
              variant="outlined"
              inputRef={loginPassword}
              error={status === "invalidPassword"}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={() => {
                if (status === "invalidPassword") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidPassword" ? (
                  <span>Incorrect password. Please try again, or Sign Up</span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid container justify={"center"}>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* This is for Login Help */}
            <div className={classes.main}>
              <Typography variant="body2">
                Email is: <b>test@stomp.com</b>
                <br />
                Password is: <b>123</b>
              </Typography>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
