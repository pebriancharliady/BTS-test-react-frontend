import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import useInput from "../hooks/useInput";
import { AuthContext } from "../context/Auth";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  // const [loginstate, setLogin] = useState();
  const { setUserToken } = useContext(AuthContext);
  const classes = useStyles();
  const [username, setUsername, overideUsername, resetUsername] = useInput("");
  const [password, setPassword, overidePassword, resetPassword] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://18.139.50.74:8080/login`,
        {
          password: password,
          username: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const resData = res.data.data;

        if (res.status === 200) {
          //   console.log(res);
          setUserToken(resData.token);
          window.localStorage.setItem("token", resData.token);
          props.history.push("/");
        }
      });
    resetUsername();
    resetPassword();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="username"
              label="Username"
              type="text"
              id="password"
              autoComplete="current-password"
              value={username}
              onChange={setUsername}
            />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={setPassword}
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
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}
