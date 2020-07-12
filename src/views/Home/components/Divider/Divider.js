import React, { useState, useEffect } from 'react';
import {
    Container,
    TitleDivider,
    Title,
    Line
  } from './styles';

export default function Divider({title}){
    const [ cards, setCards ] = useState([1,2,3]);
    return (
        <Container>
            <TitleDivider>
                <Line/>
                <Title>
                    {title}
                </Title>
                <Line/>
            </TitleDivider>
        </Container>
    )
}