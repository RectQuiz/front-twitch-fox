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
import { FaWindowRestore } from 'react-icons/fa';
import colors from '../../../../../styles/colors';
import ScaleLoader from "react-spinners/ScaleLoader";

function StreamElementsConfig({
    restoreStreamElements,
    restorePointsStreamElements,
    streamerPermission,
    loading
}) { 
    console.log("streamerPermission: ",streamerPermission);
    return (
        <Container>
            <ContainerHeader>
                <ContentHeader>
                    Comunicação com o Stream Elements
                </ContentHeader>
            </ContainerHeader>
            <ContainerBody>
                {
                    loading?
                    (
                        <ScaleLoader
                            // css={override}
                            color="#DC143C"
                            height={60}
                            width={7}
                            margin={7}
                            loading={true}
                        />
                    ):
                    (
                        <ContainerLista>
                            {
                                streamerPermission&&
                                (
                                    <ContainerItem>
                                        <ItemStatus status={restoreStreamElements}>
                                            <ContentItem disabled={restoreStreamElements} color={colors.dourado_dark} onClick={restorePointsStreamElements}>
                                                <FaWindowRestore size={20} color={colors.white} />
                                                <LabelItem>
                                                    Restore de pontos
                                                </LabelItem>
                                            </ContentItem>
                                            <StatusLinked>
                                                    {restoreStreamElements?"SINCRONIZADO":"NÃO SINCRONIZADO"}
                                            </StatusLinked>
                                        </ItemStatus>
                                    </ContainerItem>
                                )
                            }
                        </ContainerLista>
                    )
                }
            </ContainerBody>
        </Container>
    );
}

export default StreamElementsConfig;