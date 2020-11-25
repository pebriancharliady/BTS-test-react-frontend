import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../components/SignUp"

export default function SignUpRoutes() {
  return (
    <Switch>
        <Route path="/signup" component={ SignUp } />
    </Switch>
  );
}
