import React, { useState, useEffect } from 'react';
import {
    Container,
    Content,
    ContainerLogo,
    ImageLogo,
    ContainerButtonsNav,
    ButtonAuth,
    ContainerButtonMenu,
    TitleLogo,
    ImageMenu,
    ContainerListMenu,
    Ul,
    ContentBig,
    ContentSmall
} from './styles';
import logo from '../../../../assets/images/logo.png';
import menu from '../../../../assets/images/menu.png';
import { TiThMenu } from 'react-icons/ti';

export default function Header({open, setOpen, logar}){
    
    return (
        <Container>
            <Content>
                <ContentBig>
                    <ContainerLogo>
                        <ImageLogo
                            src={logo}
                            alt="logo"
                        />
                        <TitleLogo>
                            TeamJokerz
                        </TitleLogo>
                    </ContainerLogo>
                    <ContainerButtonsNav>
                        <a href="#home">ÍNICIO</a>
                        <a href="#news">LOJA</a>
                        <a href="#contact">PARCEIROS</a>
                        <a href="#about">CONTATO</a>
                        <ButtonAuth onClick={logar}>ENTRAR COM A TWITCH</ButtonAuth>
                    </ContainerButtonsNav>
                    <ContainerButtonMenu onClick={()=>setOpen(!open)}>
                        <ImageMenu
                            src={menu}
                        />
                    </ContainerButtonMenu>
                </ContentBig>
                <ContentSmall open={open}>
                        <Ul open={open}>
                            <li><a class="active" href="#home">Home</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#about">About</a></li>
                        <ButtonAuth onClick={logar}>ENTRAR COM A TWITCH</ButtonAuth>
                        </Ul>
                </ContentSmall>
            </Content>
        </Container>

    )
}