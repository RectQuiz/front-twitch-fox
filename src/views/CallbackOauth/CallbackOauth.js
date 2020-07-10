import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Redirect } from 'react-router-dom';

export default function CallbackOauth({location, history}){
    
    useEffect(()=>{
        console.log('location.hash id_token: ',(document.location.hash.match(/id_token=([^&]+)/) || [])[1]);
        console.log('location.hash access_token: ',(document.location.hash.match(/access_token=([^&]+)/) || [])[1]);
        const get_token = async ()=>{
            const code = (location.search.match(/code=([^&]+)/) || [])[1];
            // const state = (location.search.match(/state=([^&]+)/) || [])[1];
            if (code) {
                console.log('code: ',code);
                try {
                    let resp = await api.get(`http://localhost:3333/auth-from-code-twitch?code=${code}`,{withCredentials: true});
                    console.log('resp token on code: ',resp);
                    console.log('resp.data.data.url: ',resp.data);
                    history.push('/home');
                } catch (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                      } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                      } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                      }
                      console.log(error.config);
                }

                // fetch(`http://localhost:3333/auth-from-code-twitch?code=${code}`, {
                //     credentials: "include"
                //   })
                //     .then(res => res.json())
                //     .then(res => console.log(res))
                //     .catch(console.error);
            }else{
                console.log('code não encontrado: ',code);
            }
        }
        get_token();
    },[]);

    
    return (
        <div>
                <h1>
                    Callback Oauth
                    logando sua conta...
                </h1>
        </div>
    )
}