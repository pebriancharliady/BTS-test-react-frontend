import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userToken } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        userToken ? <Component {...props} /> : <Redirect to="/signup" />
      }
    />
  );
};

export default PrivateRoute;
