import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { 
  authCodeTwitch,
  setStatus,
  setResponse,
  setUrlAuthTwitch
} from '../../store/modules/login/actions';

export default function CallbackOauth({location, history}){
    
    const dispatch = useDispatch();
    const { response, url_twitch, status, errors } = useSelector(({ LoginReducer }) => LoginReducer);

    useEffect(()=>{
        console.log('location.hash id_token: ',(document.location.hash.match(/id_token=([^&]+)/) || [])[1]);
        console.log('location.hash access_token: ',(document.location.hash.match(/access_token=([^&]+)/) || [])[1]);
        const code = (location.search.match(/code=([^&]+)/) || [])[1];
        if (code) {
            dispatch(authCodeTwitch(code));
        } else {
            setTimeout(() => {
                history.push('/home');
            }, 5000);
        }
    },[]);

    useEffect(()=>{
        // console.log('response CallbackOauth: ',response);
        // console.log('url_twitch CallbackOauth: ',url_twitch);
        // console.log('status CallbackOauth: ',status);
        // console.log('staerrorstus CallbackOauth: ',errors);
        if (status && status == 200 && response && errors.length == 0) {
            const cookies = new Cookies();
            cookies.set('nickname', response.data.decodedResponse.resp.preferred_username, { path: '/' });
            dispatch(setStatus(0));
            dispatch(setResponse({}));
            history.push('/home');
        }
    },[status]);

    useEffect(()=>{
        console.log('staerrorstus CallbackOauth: ',errors);
    },[errors]);
    
    return (
        <div>
                <h1>
                    Callback Oauth
                    logando sua conta...
                </h1>
        </div>
    )
}