import React from 'react';
import { GiPopcorn, GiKing } from 'react-icons/gi';
import { MdBlock } from 'react-icons/md';

import {
    Container,
    Content,
    ContentItemInfo,
    ItemLabelInfo,
    ItemValueInfo,
    ItemLabelChannels,
    ItemValuesChannels,
    ContentItemInfoChannels,
    ContentValueInfoChannels,
    ItemLabelChannel,
    ContainerValueInfoChannels
} from './styles';

function InfoUser({user}) {
  return (
      <Container>
          <Content>
            {/* NOME */}
            <ContentItemInfo>
                <ItemLabelInfo>
                        Nome: 
                </ItemLabelInfo>
                <ItemValueInfo>
                        {(user && user.name)?user.name:'Não informado'}
                </ItemValueInfo>
            </ContentItemInfo>

            {/* NICKNAME */}
            <ContentItemInfo>
                <ItemLabelInfo>
                        Nickname: 
                </ItemLabelInfo>
                <ItemValueInfo>
                        {(user && user.nickname)?user.nickname:'Não informado'}
                </ItemValueInfo>
            </ContentItemInfo>

            {/* PONTOS */}
            <ContentItemInfo>
                <ItemLabelInfo>
                        Pontos Totais: 
                </ItemLabelInfo>
                <ItemValueInfo style={{color:'orange'}}>
                        {(user && user.points)?user.points:0} <GiPopcorn/>
                </ItemValueInfo>
            </ContentItemInfo>
            
            {/* TRADELINK */}
            <ContentItemInfo>
                <ItemLabelInfo>
                        TradeLink: 
                </ItemLabelInfo>
                <ItemValueInfo>
                        {(user && user.tradelinkSteam)?user.tradelinkSteam:'Não informado'}
                </ItemValueInfo>
            </ContentItemInfo>

            {/* CANAIS */}
            <ContentItemInfoChannels>
                <ItemLabelChannels>
                        Canais habilitados
                </ItemLabelChannels>
                <ContentValueInfoChannels>
                    {
                        (user && user.channels)&&
                        (
                            user.channels.map((channel,index)=>{
                                return(
                                    <ContainerValueInfoChannels key={index}> 
                                        <ItemLabelChannel status={channel.status}>
                                            {channel.info_channel.name}: 
                                        </ItemLabelChannel>
                                        <ItemValuesChannels status={channel.status} style={{color:'orange'}}>
                                            {channel.points} 
                                            <GiPopcorn/>  
                                            {channel.banned && <MdBlock style={{color:'red'}}/>}  
                                            {channel.subscribe && <GiKing style={{color:'yellow'}}/>}
                                        </ItemValuesChannels>
                                    </ContainerValueInfoChannels>
                                )
                            })
                        )
                    }
                </ContentValueInfoChannels>
            </ContentItemInfoChannels>
            
            {/* CONTAS SECUNDARIAS */}
            <ContentItemInfoChannels>
                <ItemLabelChannels>
                        Contas secundarias
                </ItemLabelChannels>
                <ContentValueInfoChannels>
                    {
                        (user && user.channels)&&
                        (
                            user.secondary_accounts.map((account,index)=>{
                                return(
                                    <ContainerValueInfoChannels key={index}> 
                                        <ItemLabelChannel>
                                            Conta 1: 
                                        </ItemLabelChannel>
                                        <ItemValuesChannels >
                                             <GiPopcorn/>
                                        </ItemValuesChannels>
                                    </ContainerValueInfoChannels>
                                )
                            })
                        )
                    }
                </ContentValueInfoChannels>
            </ContentItemInfoChannels>
          </Content>
      </Container>
  );
}

export default InfoUser;