import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";
import Spinner from "./Spinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { users, loading } = useAuth();
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
