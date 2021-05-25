import React, { useEffect } from 'react';
import { api } from '../../services/api';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  authCodeTwitch,
  setStatus,
  setResponse,
  setError,
  setUrlAuthTwitch,
  setLoading
} from '../../store/modules/login/actions';
import { 
  loadInfoUser
} from '../../store/modules/user/actions';
import {
    Container,
    BackgroundColor
} from './styles';
import { Footer } from '../../components';
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function CallbackOauth({location, history}){
    
    const dispatch = useDispatch();
    const { response:responseLogin, url_twitch, status, errors } = useSelector(({ LoginReducer }) => LoginReducer);

    useEffect(()=>{
        dispatch(setLoading(true));
        console.log('location.hash id_token: ',(document.location.hash.match(/id_token=([^&]+)/) || [])[1]);
        console.log('location.hash access_token: ',(document.location.hash.match(/access_token=([^&]+)/) || [])[1]);
        const code = (location.search.match(/code=([^&]+)/) || [])[1];
        if (code) {
            // setTimeout(() => {
                dispatch(authCodeTwitch(code));
            // }, 5000);
        } else {
            // setTimeout(() => {
            history.push('home');
            // }, 5000);
        }
    },[]);

    useEffect(()=>{
        console.log('responseLogin CallbackOauth: ',responseLogin);
        // console.log('url_twitch CallbackOauth: ',url_twitch);
        // console.log('status CallbackOauth: ',status);
        // console.log('staerrorstus CallbackOauth: ',errors);
        if (status && status == 200 && responseLogin && errors.length == 0) {
            dispatch(setStatus(0));
            dispatch(setResponse({}));
            history.push('home');
        }
    },[status]);

    useEffect(()=>{
        console.log('staerrorstus CallbackOauth: ',String(errors));
        if(String(errors).length > 0 ){
            dispatch(setError(''));
            history.push('home');
        }
    },[errors]);
    
    return (
        <Container>
            <BackgroundColor>
                <ScaleLoader
                    // css={override}
                    color="#DC143C"
                    height={60}
                    width={7}
                    margin={7}
                    loading={true}
                />
                <Footer/>
            </BackgroundColor>
        </Container>
    )
}