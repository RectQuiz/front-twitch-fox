import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'universal-cookie';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest })=>{
    const cookies = new Cookies();
    let isAuth = false;
    let cookieNick = cookies.get('nickname');
    let cookieSession = cookies.get('session');
    // console.log('cookieNick: ', cookieNick);
    // console.log('cookieSession: ', cookieSession);
    if (cookieNick && cookieSession) {
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