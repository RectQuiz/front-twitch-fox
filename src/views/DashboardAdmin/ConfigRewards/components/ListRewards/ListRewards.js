import React, { useState } from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

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
    ContentHeader
  } from './styles';
  import './pagination.css';
import { useHistory } from 'react-router';
import colors from '../../../../../styles/colors';
import { useDispatch } from 'react-redux';

function ListRewards({
    rewards,
    totalPages,
    flex,
    load_rewards,
    loading
}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const pageClick = (e)=>{
        console.log(e);
        let  pageSelected = e.selected + 1;
        load_rewards(pageSelected);
    }
    function formatDate(date) {
        let data = new Date(date);
        let dataFormatada = ((data.getDate() > 9?data.getDate():"0"+data.getDate())) + "/" + ((data.getMonth() + 1) > 9?(data.getMonth() + 1):"0"+(data.getMonth() + 1)) + "/" + data.getFullYear(); 
        console.log(dataFormatada);
        return dataFormatada
    }

    return (
        rewards.length > 0?
            (
                <Container flex={flex}>
                <Content>
                    <HeaderList>
                        <ContentHeader  important={true} left={true}>
                            Titulo
                        </ContentHeader>
                        <ContentHeader  important={true}>
                            Valor
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
                                rewards.map((reward,index)=>{
                                        return (
                                            <ContentRedeem>
                                                <ContentItemList title={reward.title?reward.title:'Sem titulo'} important={true} left={true}>
                                                    {reward.title?reward.title:'Sem titulo'}
                                                </ContentItemList>
                                                <ContentItemList title={reward.cost} important={true}>
                                                    {reward.cost}
                                                </ContentItemList> 
                                                <ContentItemList title={formatDate(reward.date)}>
                                                    {formatDate(reward.date)}
                                                </ContentItemList> 
                                                <ContentItemList important={true} right={true} title={reward.id_channel?reward.id_channel.name:'Canal inesistente'}>
                                                    {reward.id_channel?reward.id_channel.name:'Canal inesistente'}
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

export default ListRewards;