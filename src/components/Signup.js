import React, { useCallback, useRef, useState } from "react";
import {
  Avatar,
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    margin: theme.spacing(1),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const [status, setStatus] = useState(null);

  const eventName = useRef();
  const signupEmail = useRef();
  const signupPassword = useRef();
  const signupPasswordRepeat = useRef();

  const signup = useCallback(() => {
    if (signupPassword.current.value !== signupPasswordRepeat.current.value) {
      setStatus("passwordsDontMatch");
      return;
    } else {
      // DB LOGIC
      setTimeout(() => {
        console.log(eventName.current.value); //Event Name
        console.log(signupEmail.current.value); //Email
        console.log(signupPassword.current.value); //Password
        history.push("/");
      }, 150);
    }
    setStatus(null);
  }, [setStatus, signupPassword, signupPasswordRepeat, eventName]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Box className={classes.logo} mr={2}>
          <img height="100" src="/logo-dark.png" alt="" />
        </Box>
        <Avatar className={classes.avatar}>
          <img height="30" src="/buttons/lock.svg" alt="signup" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            signup();
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="eventName"
                variant="outlined"
                required
                fullWidth
                id="eventName"
                label="Event Name"
                inputRef={eventName}
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                inputRef={signupEmail}
                autoComplete="off"
                error={status === "invalidEmail"}
                onChange={() => {
                  if (status === "invalidEmail") {
                    setStatus(null);
                  }
                }}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                error={
                  status === "passwordTooShort" ||
                  status === "passwordsDontMatch"
                }
                inputRef={signupPassword}
                onChange={() => {
                  if (
                    status === "passwordTooShort" ||
                    status === "passwordsDontMatch"
                  ) {
                    setStatus(null);
                  }
                }}
                helperText={(() => {
                  if (status === "passwordTooShort") {
                    return "Create a password at least 6 characters long.";
                  }
                  if (status === "passwordsDontMatch") {
                    return "Your passwords dont match.";
                  }
                  return null;
                })()}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="rpassword"
                label="Repeat Password"
                type="password"
                id="rpassword"
                autoComplete="off"
                error={
                  status === "passwordTooShort" ||
                  status === "passwordsDontMatch"
                }
                inputRef={signupPasswordRepeat}
                onChange={() => {
                  if (
                    status === "passwordTooShort" ||
                    status === "passwordsDontMatch"
                  ) {
                    setStatus(null);
                  }
                }}
                helperText={(() => {
                  if (status === "passwordTooShort") {
                    return "Create a password at least 6 characters long.";
                  }
                  if (status === "passwordsDontMatch") {
                    return "Your passwords dont match.";
                  }
                })()}
                FormHelperTextProps={{ error: true }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
