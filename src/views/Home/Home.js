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
import { loadInfoUser } from '../../store/modules/user/actions';
import { useDispatch } from 'react-redux';

export default function Home({history}){
    const dispatch = useDispatch();
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
    
    useEffect(()=>{
        const token = localStorage.getItem('@siteJokerz/token');
        console.log("token Home: ",token);
        if (token) {
            console.log('loadInfoUser Home');
            dispatch(loadInfoUser());
        }
    },[]);

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