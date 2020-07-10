import React, { useState } from 'react';
import { RedesSociais, Header } from './components';
import { Container } from './styles';
import { api } from '../../services/api';

const Simple = (props) => {
  const { children } = props;
  const [ open, setOpen ] = useState(false);

  const logar = async ()=>{
    try {
        let resp = await api.get(`http://localhost:3333/auth-url-twitch`);
        console.log('resp: ',resp);
        console.log('resp.data.data.url: ',resp.data.data.url);
        if(resp.data.data.url){
            window.location.assign(resp.data.data.url);
        }
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
  }
  return (
    <Container className="bg-white">
        <RedesSociais/>
        <Header logar={logar} open={open} setOpen={setOpen}/>
        {children}
    </Container>
  )
}

export default Simple;
