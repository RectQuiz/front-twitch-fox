import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest })=>{
    let isAuth = false;
    const nickname = localStorage.getItem('@siteJokerz/nickname');
    const token = localStorage.getItem('@siteJokerz/token');
    // console.log('nickname PrivateRoute: ', nickname);
    // console.log('token PrivateRoute: ', token);
    if (nickname && token) {
        isAuth = true;
    }
    
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            {isAuth ? (
              <Component {...props} />
            )
              :
              <Redirect to={{pathname:'/home', state:{from:props.location}}}  />
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