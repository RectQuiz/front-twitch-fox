import React, { useState } from 'react';
import {
    Container,
    Content,
    ContainerCard,
    Card,

    IconCard,
    TitleCard,
    DescCard
  } from './styles';
  import logo from '../../../../assets/images/logo.png';

export default function Cards(){
    const [ cards, setCards ] = useState([
        {
            titulo:"GANHE PONTOS",
            decribe:"Receba pontos do chat assistindo as lives parceiras",
            image:logo
        },
        {
            titulo:"TROQUE OS PONTOS",
            decribe:"Troque os pontos do chat por pipocas",
            image:logo
        },
        {
            titulo:"RESGATE SKINS",
            decribe:"Utilize seus pontos para resgatar skins",
            image:logo
        }
    ]);
    return (
        <Container>
            <Content>
                {
                    cards.map((card)=>(
                        <ContainerCard key={card}>
                            <Card>
                                <IconCard
                                    src={card.image}
                                />
                                <TitleCard>
                                    {card.titulo}
                                </TitleCard>
                                <DescCard>
                                    {card.decribe}
                                </DescCard>
                            </Card>
                        </ContainerCard>
                    ))
                }
            </Content>
        </Container>
    )
}