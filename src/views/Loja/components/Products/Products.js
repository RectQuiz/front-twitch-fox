import React, { useState, useEffect } from 'react';
import {
    Container,
    Content,
    ContainerProducts
  } from './styles';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../../../store/modules/modal/actions';

import './pagination.css';
import { ModalInfoProduct, CardProduct } from '../../../../components';

export default function Products({
    products,
    pagination,
    load_products,
    modal,
    setModal
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

    console.log('products 1: ',products);
    const [ cards, setCards ] = useState([1,2,3,4]);
    return (
        
            products.length > 0?
                (
                    <Container>
                        <Content>
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
                        </Content>
                        <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={pagination.totalPages}
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