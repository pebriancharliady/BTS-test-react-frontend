import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from '../Dashboard'

export default function MainRoutes() {
  return (
    <Switch>
        <Route path="/dashboard" component={ Dashboard } />
    </Switch>
  );
}
