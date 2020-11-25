import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from '../../context/Auth'


const PublicRoute = ({ component: Component, ...rest }) => {
    const {userToken} = useContext(AuthContext)
    return (
    <Route
      {...rest}
      render={(props) =>
        userToken ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props}/>
        )
      }
    />
  );
};

export default PublicRoute;
