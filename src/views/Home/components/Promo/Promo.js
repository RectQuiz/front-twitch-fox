import React, { useState, useEffect } from 'react';
import {
    Container,
    Content,
    Products,
    ButtonStore
  } from './styles';
import { api } from '../../../../services/api';


import logo from '../../../../assets/images/logo.png';
import { CardProduct } from '../../../../components';

export default function Cards({}){
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        const load_products = async()=>{
            try {
                // let resp = await api.get(`https://steamcommunity.com/id/argerioaf/inventory/json/730/2`);
                let resp = await api.get(`http://localhost:3333/products/promo`,{withCredentials: true});
                console.log('resp itens cs: ',resp.data.data);
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
    console.log('products: ',products);
    const [ cards, setCards ] = useState([1,2,3,4]);
    return (
        <Container>
            <Content>
                <Products>
                    {
                    products.map((product)=>{
                            return (
                                <CardProduct
                                    key={product.id_item}
                                    image={product.imageurl}
                                    title={product.name}
                                    type={product.type}
                                    amount={product.amount}
                                    price={product.price}
                                    desc={product.exterior}
                                    inspectLink={product.inspectGameLink}
                                    promo={product.promo}
                                    pricePromo={product.promo?product.pricePromo:null}
                                />
                            )
                        })
                    }
                </Products>
            </Content>
            <ButtonStore>
                Ver loja!
            </ButtonStore>
        </Container>
    )
}