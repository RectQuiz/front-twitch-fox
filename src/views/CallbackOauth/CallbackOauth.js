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
        console.log('location.hash code: ',(location.search.match(/code=([^&]+)/) || [])[1]);
        console.log('location.hash state: ',(location.search.match(/state=([^&]+)/) || [])[1]);
        const code = (location.search.match(/code=([^&]+)/) || [])[1];
        const state = (location.search.match(/state=([^&]+)/) || [])[1];
        if (code) {
            // setTimeout(() => {
                if (state) {
                    console.log('location.hash state 1: ',state);
                    dispatch(authCodeTwitch({code:code,id_user:state}));
                }else{
                    dispatch(authCodeTwitch({code:code}));
                }
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
        // console.log('staerrorstus CallbackOauth: ',errors);
        if (status && status == 200 && responseLogin && errors.length == 0) {
            const state = (location.search.match(/state=([^&]+)/) || [])[1];
            dispatch(setStatus(0));
            dispatch(setResponse({}));
            console.log('location.hash state 2: ',state);
            if (state) {
                console.log('location.hash state 3: ',state);
                history.push(`dashboard/${responseLogin.data.user_id}/config`);
            }else{
                history.push('home');
            }
        }
    },[status]);

    useEffect(()=>{
        const state = (location.search.match(/state=([^&]+)/) || [])[1];
        console.log('staerrorstus CallbackOauth: ',String(errors));
        console.log('responseLogin CallbackOauth: ',responseLogin);
        console.log('state CallbackOauth: ',state);
        if(String(errors).length > 0 ){
            dispatch(setError(''));
            // history.push('home');
            if (state) {
                console.log('location.hash state 4: ',state);
                history.push(`dashboard/${state}/config`);
            }else{
                history.push('home');
            }
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