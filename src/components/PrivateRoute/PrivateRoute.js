import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({
  layout: Layout,
  component: Component,
  header,
  ...rest
}) => {
  let isAuth = false;
  const nickname = localStorage.getItem("@siteJokerz/nickname");
  const token = localStorage.getItem("@siteJokerz/token");
  // console.log('nickname PrivateRoute: ', nickname);
  // console.log('token PrivateRoute: ', token);
  if (nickname && token) {
    isAuth = true;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout header={header}>
          {isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/home", state: { from: props.location } }}
            />
          )}
        </Layout>
      )}
    />
  );
};

PrivateRoute.prototype = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default PrivateRoute;
