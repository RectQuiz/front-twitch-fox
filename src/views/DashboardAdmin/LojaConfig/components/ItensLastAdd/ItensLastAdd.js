import React, { useState } from 'react';
import { CardProduct, ModalInfoProduct } from '../../../../../components';
import ScaleLoader from "react-spinners/ScaleLoader";

import ReactPaginate from 'react-paginate';
import { API_URL } from '../../../../../services/config';
import {
    Container,
    Content,
    ContainerProducts
  } from './styles';
  import './pagination.css';
import { useHistory } from 'react-router';
import colors from '../../../../../styles/colors';
import { useDispatch } from 'react-redux';
import { changeStatusProductAction, deleteProductAction } from '../../../../../store/modules/products/actions';

function ItensLastAdd({products, totalPages, flex, setModal, modal, load_products, loading}) {
    const dispatch = useDispatch();
    const [ productSelect, setProductSelect ] = useState(null);
    const history = useHistory();

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

    const editProduct = (product)=>{
        history.push(`/dashboard/product/edit/${product._id}`);
    }

    const changeStatusProduct = (status,id)=>{
        dispatch(changeStatusProductAction({status:status},id));
    }

    const deleteProduct = (id)=>{
        dispatch(deleteProductAction(id));
    }

  return (
    products.length > 0?
        (
            <Container flex={flex}>
                <Content>
                    {
                        !loading?
                        (
                            <ContainerProducts>
                                {
                                products.map((product,index)=>{
                                        return (
                                            <CardProduct
                                                deleteProduct={deleteProduct}
                                                tradable={product.tradable?product.tradable:false}
                                                id={product._id}
                                                changeStatusProduct={changeStatusProduct}
                                                status={product.status}
                                                editProduct={()=>editProduct(product)}
                                                floatvalue={product.floatvalue}
                                                dash={true}
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
                                            />
                                        )
                                    })
                                }
                            </ContainerProducts>
                        ):
                        (
                            <ScaleLoader
                                // css={override}
                                color={colors.primary_geral}
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
                        containerClassName={"paginationDash"}
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
  );
}

export default ItensLastAdd;