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
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/modules/products/actions';
import { loadChannelsAction } from '../../store/modules/channel/actions';
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Home({history}){
    const dispatch = useDispatch();
  const { products, totalPages, currentPage, loading } = useSelector(({ ProductsReducer }) => ProductsReducer);
  const { channels, loading:loadingChannels } = useSelector(({ ChannelsReducer }) => ChannelsReducer);
    
    useEffect(()=>{
        const token = localStorage.getItem('@siteJokerz/token');
        console.log("token Home: ",token);
        if (token) {
            console.log('loadInfoUser Home');
            dispatch(loadInfoUser());
        }
        load_products(1);
        dispatch(loadChannelsAction({}));
    },[]);

    const load_products = async(page)=>{
      dispatch(loadProducts({page:page, status:"emEstoque"}));
    };

    return (
        <Content fundo={fundo}>
            <CarouselComp/>
            <BackgroundColor>
                <Cards/>
                {products && products.length > 0 && <Divider title='Produtos'/>}
                {
                    products && products.length > 0 && <Promo products={products}/>
                }
               
                {/* <Divider title='Lives parceiras'/> */}
                {
                    !loadingChannels?
                    (
                        <Parceiros channels={channels}/>
                    ):
                    (
                        <ScaleLoader
                            // css={override}
                            color="#DC143C"
                            height={60}
                            width={7}
                            margin={7}
                            loading={true}
                        />
                    )
                }
                <Footer/>
            </BackgroundColor>
        </Content>
    )
}