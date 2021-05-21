import React, { useState, useEffect } from 'react';
import { CardProduct, ModalInfoProduct } from '../../../../../components';

import ReactPaginate from 'react-paginate';
import { GiPopcorn } from 'react-icons/gi';
import {
    Container,
    Content,
    ContainerProducts
  } from './styles';
  import './pagination.css';

function ItensLastAdd({products, totalPages, flex, setModal, modal, load_products, loading}) {
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
  return (
    products.length > 0?
        (
            <Container flex={flex}>
                <Content>
                    {
                        !loading&&
                        (
                            <ContainerProducts>
                                {
                                products.map((product,index)=>{
                                        return (
                                            <CardProduct
                                                handleSelect={handleSelect}
                                                key={index}
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
                            </ContainerProducts>
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
                        containerClassName={"paginationDash"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                />
                {
                    productSelect &&
                    (
                        <ModalInfoProduct setModal={setModal} infoProduct={productSelect} show={modal} handleClose={handleClose}/>
                    )
                }
            </Container>
        ):
        (
            <></>
        )
  );
}

export default ItensLastAdd;