import React, { useEffect } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer } from '../../components';
import { Redirect } from 'react-router-dom';

import {
    Content,
    BackgroundColor
} from './styles';
import { FormLogin } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin, setResponse, setStatus } from '../../store/modules/login/actions';

function LoginAdmin(props) {
    const dispatch = useDispatch();
    const { location, history } = props;
    let isAuth = false;
    const { response, status, errors } = useSelector(({ LoginReducer }) => LoginReducer);
    // console.log('status LoginAdmin: ',status);
    useEffect(()=>{
        // console.log('responseLogin LoginAdmin: ',response);
        // console.log('url_twitch CallbackOauth: ',url_twitch);
        // console.log('status CallbackOauth: ',status);
        // console.log('staerrorstus CallbackOauth: ',errors);
        if (status && status === 200 && response && errors.length === 0) {
            dispatch(setStatus(0));
            dispatch(setResponse({}));
            history.push('dashboard');
        }
    },[status]);
    const nickname = localStorage.getItem('@siteJokerz/nickname');
    const token = localStorage.getItem('@siteJokerz/token');
    // console.log('nickname PrivateRoute: ', nickname);
    // console.log('token PrivateRoute: ', token);
    if (nickname && token) {
        isAuth = true;
    }

    function login(values) {
        dispatch(loginAdmin(values));
    }

    return (
        <Content>
            <BackgroundColor>
                
                {!isAuth ? 
                (
                    false?
                    (
                        <ScaleLoader
                            // css={override}
                            color="#DC143C"
                            height={60}
                            width={7}
                            margin={7}
                            loading={true}
                        />
                    ):
                    (
                        <FormLogin 
                            login={login}
                        />
                    )
                )
                :
                    <Redirect to={{pathname:'/home', state:{from:location}}}  />
                }
                <Footer/>
            </BackgroundColor>
        </Content>
    );
}

export default LoginAdmin;