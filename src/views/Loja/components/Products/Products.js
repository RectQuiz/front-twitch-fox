import React, { useState } from 'react';
import {
    Container,
    Content,
    ContainerProducts,
    ContentInfoPoints,
    PointsLabel,
    PointsValue
  } from './styles';
import ReactPaginate from 'react-paginate';
import ScaleLoader from "react-spinners/ScaleLoader";

import './pagination.css';
import { GiPopcorn } from 'react-icons/gi';
import { ModalInfoProduct, CardProduct } from '../../../../components';
import { API_URL } from '../../../../services/config';

export default function Products({
    products,
    totalPages,
    // currentPage,
    load_products,
    modal,
    setModal,
    user,
    loading
}){
    const [ productSelect, setProductSelect ] = useState(null);
    const pageClick = (e)=>{
        console.log(e);
        let  pageSelected = e.selected + 1;
        load_products(pageSelected);
    }

    const handleSelect = (product)=>{
        console.log('handleSelect item');
        setProductSelect(product);
        setModal(true);
    }
    
    const handleClose = ()=>{
        console.log('handleClose item');
        setProductSelect(null);
        setModal(false);
    }

    // console.log('user: ',user);
    // console.log('products 1: ',products);
    const [ cards, setCards ] = useState([1,2,3,4]);
    return (
        
            products.length > 0?
                (
                    <Container>
                        <Content>

                            {
                                !loading?
                                (
                                    <>
                                    {user?
                                    (
                                        <ContentInfoPoints>
                                            <PointsLabel>
                                                Seus Pontos: 
                                            </PointsLabel>
                                            <PointsValue>
                                                    {user.points} <GiPopcorn/> 
                                            </PointsValue>
                                        </ContentInfoPoints>
                                    ):
                                    (null)}
                                    <ContainerProducts>
                                        {
                                        products.map((product,index)=>{
                                                return (
                                                    <CardProduct
                                                        id={product._id}
                                                        floatvalue={product.floatvalue}
                                                        handleSelect={handleSelect}
                                                        key={index}
                                                        image={product.imageurl?product.imageurl:`${API_URL}/${product.imagepath}`}
                                                        title={product.name}
                                                        type={product.type}
                                                        amount={product.amount}
                                                        price={product.price}
                                                        desc={product.exterior}
                                                        inspectLink={product.inspectGameLink}
                                                        promo={product.promo}
                                                        pricePromo={product.promo?product.pricePromo:null}
                                                        stickers={product.stickersinfo?product.stickersinfo:null}
                                                        paint={product.paint?product.paint:null}
                                                        price_real={product.price_real?product.price_real:null}
                                                    />
                                                )
                                            })
                                        }
                                    </ContainerProducts>
                                    </>
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
                        </Content>
                        <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={totalPages}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={2}
                                onPageChange={pageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                        />
                        {
                            productSelect &&
                            (
                                <ModalInfoProduct infoProduct={productSelect} show={modal} handleClose={handleClose}/>
                            )
                        }
                    </Container>
                ):
                (
                    <></>
                )
    )
}