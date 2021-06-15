import React, { useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import { FaCheckCircle, FaRegTimesCircle, FaListAlt, FaSteam } from 'react-icons/fa';

import ReactPaginate from 'react-paginate';
import { API_URL } from '../../../../../services/config';
import {
    Container,
    Content,
    ContainerResgates,
    ContentRedeem,
    ContentItemList,
    ContentItemAcoes,
    HeaderList,
    ContentHeader,
    ContentAcao
  } from './styles';
  import './pagination.css';
import { useHistory } from 'react-router';
import colors from '../../../../../styles/colors';
import { useDispatch } from 'react-redux';
import { changeStatusRedeemProduct } from '../../../../../store/modules/products/actions';
import { ContentIconAlert } from '../../../../../components/AlertMessageSimple/styles';
import { setAlert } from '../../../../../store/modules/alerts/actions';

function ListResgates({
    redeemProducts,
    totalPages,
    flex,
    load_redeem_products,
    loading
}) {
    const dispatch = useDispatch();
    const history = useHistory();

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
    
    function pedidoEntregue(id_redeem) {
        dispatch(changeStatusRedeemProduct({status:'entregue',id_redeem:id_redeem}));
    }
    
    function pedidoCancelado(id_redeem) {
        dispatch(changeStatusRedeemProduct({status:'cancelado',id_redeem:id_redeem}));
    }

    function detalheProduto(id_product) {
        console.log("id_product:",id_product._id);
        history.push(`/dashboard/product/detail/${id_product._id}`);
    }
    
    function copiarTradLink(tradelink) {
        if (navigator.clipboard.writeText(tradelink)) {
            dispatch(setAlert({
              message:'Trade link copiado com sucesso!',
              tipo:'warning',
              time:5000
            }));
        } else {
            dispatch(setAlert({
              message:'Erro ao copiar trade link!',
              tipo:'error',
              time:5000
            }));
        }
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
                            <ContentHeader>
                                Float
                            </ContentHeader>
                            <ContentHeader important={true} right={true}>
                                Ações
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
                                                    <ContentItemList title={redeemProduct.id_channel.name}>
                                                        {redeemProduct.product_float?redeemProduct.product_float:'Não possui'}
                                                    </ContentItemList>
                                                    <ContentItemAcoes important={true} right={true}>
                                                        <ContentAcao onClick={()=>detalheProduto(redeemProduct.product_id)} color={colors.blue}>
                                                            <FaListAlt size={22} color={colors.white} />
                                                        </ContentAcao>
                                                        {
                                                            ((redeemProduct.id_user.tradelinkSteam&&redeemProduct.id_user.tradelinkSteam.length>0)) &&
                                                                <ContentAcao onClick={()=>copiarTradLink(redeemProduct.id_user.tradelinkSteam)} color={colors.white}>
                                                                    <FaSteam size={22} color={colors.steam_primary} />
                                                                </ContentAcao>
                                                        }
                                                        <ContentAcao onClick={()=>pedidoEntregue(redeemProduct._id)} color={colors.green}>
                                                            <FaCheckCircle size={22} color={colors.white} />
                                                        </ContentAcao>
                                                        <ContentAcao onClick={()=>pedidoCancelado(redeemProduct._id)} color={colors.red}>
                                                            <FaRegTimesCircle size={22} color={colors.white} />
                                                        </ContentAcao>
                                                    </ContentItemAcoes>
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