import React, { useState, useEffect } from 'react';
import {
    Container,
    Detail,
    Content,
    ContainerCard,
    Card,

    IconCard,
    TitleCard,
    DescCard
  } from './styles';
  import logo from '../../../../assets/images/logo.png';

export default function Cards({}){
    const [ cards, setCards ] = useState([1,2,3]);
    return (
        <Container>
            <Content>
                {
                    cards.map((card)=>(
                        <ContainerCard key={card}>
                            <Card>
                                <IconCard 
                                    src={logo}
                                />
                                <TitleCard>
                                    ASSISTA
                                </TitleCard>
                                <DescCard>
                                    Assista as lives.
                                </DescCard>
                            </Card>
                        </ContainerCard>
                    ))
                }
            </Content>
        </Container>
    )
}