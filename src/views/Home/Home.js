import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { api } from '../../services/api';
import { Redirect } from 'react-router-dom';
import CarouselComp from './components/CarouselComp';
import Cards from './components/Cards';
import Promo from './components/Promo';
import Divider from './components/Divider';
import Parceiros from './components/Parceiros';
import fundo from '../../assets/images/fundo.jpg';
import Footer from '../../components/Footer';
import { BackgroundColor, Content } from './styles';

export default function Home({history}){
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        const load_products = async()=>{
            try {
                // let resp = await api.get(`https://steamcommunity.com/id/argerioaf/inventory/json/730/2`);
                let resp = await api.get(`http://localhost:3333/products/promo`);
                // console.log('resp itens cs: ',resp.data.data);
                setProducts(resp.data.data);
            } catch (error) {
                console.log('error itens cs: ',error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('data',error.response.data);
                    console.log('status',error.response.status);
                    console.log('headers',error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log('request',error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error itens cs', error.message);
                }
                console.log('error.config',error.config);
            }
        }
        load_products();
    },[]);

    const handleSubmit = async (event)=>{
        // let hash = props.location;
        // let search = props.location.search;
        // console.log('hash: ',hash);
        // console.log('search: ',search);
        try {
            let resp = await api.get('http://localhost:3333/home');
            const url = await resp.text();
            console.log('resp: ',resp);
            console.log('url: ',window.location.assign(url));

        } catch (error) {
            console.log('error: ',error);
        }
    }

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
    
    const teste = async()=>{
        try {
            let resp = await api.get(`http://localhost:3333/home`,{withCredentials: true});
            console.log('resp home: ',resp);
            // console.log('resp.data home: ',resp.data);
            // history.push('/home');
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if(error.response.status == 403){
                    history.push('/home');
                }
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
        <Content fundo={fundo}>
            <CarouselComp/>
            <BackgroundColor>
                <Cards/>
                {products.length > 0 && <Divider title='Promoções'/>}
                <Promo products={products}/>
                {/* <Divider title='Lives parceiras'/> */}
                <Parceiros/>
                <Footer/>
            </BackgroundColor>
        </Content>
    )
}