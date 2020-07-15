import React from 'react';

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
            <ContentItemInfo>
                <ItemLabelInfo>
                        Nome: 
                </ItemLabelInfo>
                <ItemValueInfo>
                        {(user && user.name)?user.name:'Não informado'}
                </ItemValueInfo>
            </ContentItemInfo>
            <ContentItemInfo>
                <ItemLabelInfo>
                        Nickname: 
                </ItemLabelInfo>
                <ItemValueInfo>
                        {(user && user.nickname)?user.nickname:'Não informado'}
                </ItemValueInfo>
            </ContentItemInfo>
            <ContentItemInfo>
                <ItemLabelInfo>
                        Pipocas: 
                </ItemLabelInfo>
                <ItemValueInfo>
                        {(user && user.points)?user.points:0}
                </ItemValueInfo>
            </ContentItemInfo>

            <ContentItemInfoChannels>
                <ItemLabelChannels>
                        Canais habilitados
                </ItemLabelChannels>
                <ContentValueInfoChannels>
                    {
                        (user && user.channels)&&
                        (
                            user.channels.map((channel)=>{
                                return(
                                    <ContainerValueInfoChannels> 
                                        <ItemLabelChannel>
                                            {channel.info_channel.name}: 
                                        </ItemLabelChannel>
                                        <ItemValuesChannels>
                                            {channel.points}
                                        </ItemValuesChannels>
                                    </ContainerValueInfoChannels>
                                )
                            })
                        )
                    }
                </ContentValueInfoChannels>
            </ContentItemInfoChannels>
            
            <ContentItemInfo>
                <ItemLabelInfo>
                        TradeLink: 
                </ItemLabelInfo>
                <ItemValueInfo>
                        {(user && user.tradelinkSteam)?user.tradelinkSteam:'Não informado'}
                </ItemValueInfo>
            </ContentItemInfo>
          </Content>
      </Container>
  );
}

export default InfoUser;