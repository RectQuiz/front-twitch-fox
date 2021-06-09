import React, { useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

import ReactPaginate from 'react-paginate';
import { API_URL } from '../../../../../services/config';
import {
    Container,
    Content,
    ContainerResgates,
    ContentRedeem,
    Nickname,
    Pipocas,
    DataRetirada,
    Canal
  } from './styles';
  import './pagination.css';
import { useHistory } from 'react-router';
import colors from '../../../../../styles/colors';
import { useDispatch } from 'react-redux';

function ListResgates({
    redeemPoints,
    totalPages,
    flex,
    load_redeem_points,
    loading
}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const pageClick = (e)=>{
        console.log(e);
        let  pageSelected = e.selected + 1;
        load_redeem_points(pageSelected);
    }
    function formatDate(date) {
        let data = new Date(date);
        let dataFormatada = ((data.getDate() > 9?data.getDate():"0"+data.getDate())) + "/" + ((data.getMonth() + 1) > 9?(data.getMonth() + 1):"0"+(data.getMonth() + 1)) + "/" + data.getFullYear(); 
        console.log(dataFormatada);
        return dataFormatada
    }

    return (
        redeemPoints.length > 0?
            (
                <Container flex={flex}>
                    <Content>
                        {
                            !loading?
                            (
                                <ContainerResgates>
                                    {
                                    redeemPoints.map((redeemPoint,index)=>{
                                            return (
                                                <ContentRedeem>
                                                    <Nickname>
                                                        {redeemPoint.id_user.nickname}
                                                    </Nickname>
                                                    {` retirou `}
                                                    <Pipocas>
                                                        {redeemPoint.amount}
                                                    </Pipocas> 
                                                    {` pipocas, no dia `}
                                                    <DataRetirada>
                                                    {formatDate(redeemPoint.date)}
                                                    </DataRetirada> 
                                                    {` no canal `}
                                                    <Canal>
                                                        {redeemPoint.id_channel.name}
                                                    </Canal>
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