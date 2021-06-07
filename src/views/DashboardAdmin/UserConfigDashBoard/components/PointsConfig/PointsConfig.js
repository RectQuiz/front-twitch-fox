import React, { useEffect, useState } from 'react';

import {
    Container,

    ContainerHeader,
    ContentHeader,

    ContainerBody,
    ContainerLista,
    ContainerItem,
    LabelItem,
    ContentItem,
    StatusLinked,
    ItemStatus
} from './styles';
import { FaExchangeAlt } from 'react-icons/fa';
import colors from '../../../../../styles/colors';

function PointsConfig({changeStatusPubSub, statusPubSub}) { 
    return (
        <Container>
            <ContainerHeader>
                <ContentHeader>
                    Comunicação com a Twitch
                </ContentHeader>
            </ContainerHeader>
            <ContainerBody>
                <ContainerLista>
                    <ContainerItem>
                        <ItemStatus status={statusPubSub}>
                            <ContentItem onClick={()=>changeStatusPubSub(!statusPubSub)}>
                                <FaExchangeAlt size={20} color={colors.white} />
                                <LabelItem>
                                    Socket
                                </LabelItem>
                            </ContentItem>
                            <StatusLinked>
                                    {statusPubSub?"ATIVADO":"NÃO ATIVADO"}
                            </StatusLinked>
                        </ItemStatus>
                    </ContainerItem>
                </ContainerLista>
            </ContainerBody>
        </Container>
    );
}

export default PointsConfig;