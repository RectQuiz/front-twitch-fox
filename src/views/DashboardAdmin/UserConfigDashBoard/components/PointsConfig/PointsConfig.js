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
import { FaExchangeAlt, FaSyncAlt } from 'react-icons/fa';
import colors from '../../../../../styles/colors';

function PointsConfig({
    changeStatusPubSub,
    statusPubSub,
    adminPermission,
    pointsSyncTwitch,
    syncPointsTwitch
}) { 
    return (
        <Container>
            <ContainerHeader>
                <ContentHeader>
                    Comunicação com a Twitch
                </ContentHeader>
            </ContainerHeader>
            <ContainerBody>
                <ContainerLista>
                    {
                        adminPermission&&
                        (
                            <ContainerItem>
                                <ItemStatus status={statusPubSub}>
                                    <ContentItem color={colors.color_socket} onClick={()=>changeStatusPubSub(!statusPubSub)}>
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
                        )
                    }
                    <ContainerItem>
                        <ItemStatus status={pointsSyncTwitch}>
                            <ContentItem color={colors.dourado_dark} onClick={()=>syncPointsTwitch(!pointsSyncTwitch)}>
                                <FaSyncAlt size={20} color={colors.white} />
                                <LabelItem>
                                    Sincronizar pontos
                                </LabelItem>
                            </ContentItem>
                            <StatusLinked>
                                    {pointsSyncTwitch?"SINCRONIZADO":"NÃO SINCRONIZADO"}
                            </StatusLinked>
                        </ItemStatus>
                    </ContainerItem>
                </ContainerLista>
            </ContainerBody>
        </Container>
    );
}

export default PointsConfig;