import React, { useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

import ReactPaginate from 'react-paginate';
import {
    Container,
    Content,
    ContainerResgates,
    ContentRedeem,
    ContentItemList,
    HeaderList,
    ContentHeader
  } from './styles';
  import './pagination.css';
import colors from '../../../../../styles/colors';

function ListResgates({
    redeemProducts,
    totalPages,
    flex,
    load_redeem_products,
    loading
}) {
    const pageClick = (e)=>{
        console.log(e);
        let  pageSelected = e.selected + 1;
        load_redeem_products(pageSelected);
    }

    function formatDate(date) {
        let data = new Date(date);
        let dataFormatada = ((data.getDate() > 9?data.getDate():"0"+data.getDate())) + "/" + ((data.getMonth() + 1) > 9?(data.getMonth() + 1):"0"+(data.getMonth() + 1)) + "/" + data.getFullYear(); 
        console.log(dataFormatada);
        return dataFormatada
    }

    return (
        redeemProducts.length > 0?
            (
                <Container flex={flex}>
                    <Content>
                        <HeaderList>
                            <ContentHeader  important={true} left={true}>
                                Nickname
                            </ContentHeader>
                            <ContentHeader  important={true}>
                                Produto
                            </ContentHeader>
                            <ContentHeader>
                                Data
                            </ContentHeader>
                            <ContentHeader important={true} right={true}>
                                Canal
                            </ContentHeader>
                        </HeaderList>
                        {
                            !loading?
                            (
                                <ContainerResgates>
                                    {
                                    redeemProducts.map((redeemProduct,index)=>{
                                            return (
                                                <ContentRedeem>
                                                    <ContentItemList title={redeemProduct.id_user.nickname} important={true} left={true}>
                                                        {redeemProduct.id_user.nickname}
                                                    </ContentItemList>
                                                    <ContentItemList title={redeemProduct.product_id.name} important={true}>
                                                        {redeemProduct.product_id.name}
                                                    </ContentItemList> 
                                                    <ContentItemList title={formatDate(redeemProduct.date)}>
                                                        {formatDate(redeemProduct.date)}
                                                    </ContentItemList> 
                                                    <ContentItemList important={true} right={true} title={redeemProduct.id_channel.name}>
                                                        {redeemProduct.id_channel.name}
                                                    </ContentItemList>
                                                </ContentRedeem>
                                            )
                                        })
                                    }
                                </ContainerResgates>
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
                </Container>
            ):
            (
                <></>
            )
    );
}

export default ListResgates;