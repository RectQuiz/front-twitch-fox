import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest })=>{
    const isAuth = localStorage.getItem('@token') ? true : false;
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            {isAuth ? (
              <Component {...props} />
            )
              :
              <Redirect to={{pathname:'/login', state:{from:props.location}}}  />
            }
          </Layout>
        )}
      />
    )
} 


PrivateRoute.prototype = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
}
  
export default PrivateRoute;