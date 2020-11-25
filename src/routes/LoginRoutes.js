import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login"

export default function Login() {
  return (
    <Switch>
        <Route path="/login" component={ Login } />
    </Switch>
  );
}
