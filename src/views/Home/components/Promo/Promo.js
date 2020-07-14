import React, { useState, useEffect } from 'react';
import {
    Container,
    Content,
    Products,
    ButtonStore
  } from './styles';
  import { Link } from 'react-router-dom';


import logo from '../../../../assets/images/logo.png';
import { CardProduct } from '../../../../components';

export default function Cards({products}){
    console.log('products: ',products);
    const [ cards, setCards ] = useState([1,2,3,4]);
    return (
            products.length > 0?(
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
                    <Link to="/loja">
                        <ButtonStore>
                            Ver loja!
                        </ButtonStore>
                    </Link>
                </Container>
            ):(<></>)
    )
}