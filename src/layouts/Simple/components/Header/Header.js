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
    ContentSmall,
    ContainerNickname,
    ContentNickname,
    Nickname
} from './styles';
import logo from '../../../../assets/images/logo.png';
import menu from '../../../../assets/images/menu.png';
import { TiThMenu } from 'react-icons/ti';
import { FaArrowCircleDown } from 'react-icons/fa';
import Cookies from 'universal-cookie';

export default function Header({open, setOpen, logar }){
    const [ nickname, setNickname] = useState(null);
    const [ visibleInfoUser, setVisibleInfoUser] = useState(true);
    
    useEffect(()=>{
        const cookies = new Cookies();
        // Cookies.set('teste', 'value');
        let cookieNick = cookies.get('nickname');
        let cookieSession = cookies.get('session');
        // console.log('cookieNick: ', cookieNick);
        // console.log('cookieSession: ', cookieSession);
        if (cookieNick && cookieSession) {
            setNickname(cookieNick);
        }else{
            setNickname(null);
        }
    });
    
    const setVisibleDropDown = ()=>{
        console.log('visibleInfoUser: ',visibleInfoUser);
        setVisibleInfoUser(!visibleInfoUser);
    }

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
                        <a href="/">HOME</a>
                        <a href="/loja">LOJA</a>
                        <a href="#contact">PARCEIROS</a>
                        <a href="#about">CONTATO</a>
                        {
                            !nickname?(
                                <ButtonAuth onClick={logar}>ENTRAR COM A TWITCH</ButtonAuth>
                            ):
                            (
                                <ContainerNickname>
                                    <ContentNickname>
                                        <Nickname>
                                            {nickname}
                                        </Nickname>
                                    </ContentNickname>
                                </ContainerNickname>
                            )
                        }
                    </ContainerButtonsNav>
                    <ContainerButtonMenu onClick={()=>setOpen(!open)}>
                        <ImageMenu
                            src={menu}
                        />
                    </ContainerButtonMenu>
                </ContentBig>
                <ContentSmall open={open}>
                        <Ul open={open}>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/loja">LOJA</a></li>
                            <li><a href="#contact">PARCEIROS</a></li>
                            <li><a href="#about">CONTATO</a></li>
                            {
                                !nickname?(
                                    <ButtonAuth onClick={logar}>ENTRAR COM A TWITCH</ButtonAuth>
                                ):
                                (
                                    <ContainerNickname>
                                        <ContentNickname>
                                            <Nickname>
                                                {nickname}
                                            </Nickname>
                                        </ContentNickname>
                                    </ContainerNickname>
                                )
                            }
                        </Ul>
                </ContentSmall>
            </Content>
        </Container>

    )
}