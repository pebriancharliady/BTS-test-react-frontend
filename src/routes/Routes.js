import React, { lazy, Suspense} from "react";
import { Redirect, Switch } from "react-router-dom";
import PrivateRoute from "./AuthRoutes/PrivateRoute";
import PublicRoute from "./AuthRoutes/PublicRoute";
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Dashboard from '../Dashboard'
// const LoginRoutes = lazy(() => import("./SignUpRoutes"));
// const MainRoutes = lazy(() => import("./MainRoutes"));

export const Routes = () => {
  return (
    <Suspense fallback="Loading ...">
      <Switch>
        <Redirect from="/" to="/signup" exact />
        <PublicRoute
          component={SignUp}
          path="/signup"
          exact
        />
        <PublicRoute
          component={Login}
          path="/login"
          exact
        />
        <PrivateRoute component={Dashboard} path="/dashboard" />
      </Switch>
    </Suspense>
  );
};
