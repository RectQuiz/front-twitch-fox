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
    Ul,
    ContentBig,
    ContentSmall,
    ContainerNickname,
    ContentNickname,
    Nickname,
    ContainerDropDown,
    ItemDropDown,
    ContainerDropDownMobile,
    ItemDropDownMobile
} from './styles';
import { useHistory } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import menu from '../../../../assets/images/menu.png';
import { Link } from 'react-router-dom';
export default function Header({open, setOpen, logar, loadingAuth }){
    let history = useHistory();
    const [ nickname, setNickname] = useState(null);
    const [ dropDawnMobile, setDropDawnMobile] = useState(false);

    useEffect(()=>{
        const nickname = localStorage.getItem('@siteJokerz/nickname');
        const token = localStorage.getItem('@siteJokerz/token');
        if (nickname && token) {
            setNickname(nickname);
        }else{
            setNickname(null);
        }
    });
    
    const setVisibleDropDownMobile = ()=>{
        console.log('visibleInfoUser: ',dropDawnMobile);
        setDropDawnMobile(!dropDawnMobile);
    }

    const styleTaga = {
        cursor:loadingAuth?'not-allowed':'',
        pointerEvents:loadingAuth?'none':'auto'
    }

    const logOut = ()=>{
        localStorage.removeItem('@siteJokerz/token');
        localStorage.removeItem('@siteJokerz/nickname');
        window.location.reload(false);
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
                        <a style={styleTaga} href="/">HOME</a>
                        <a style={styleTaga} href="/loja">LOJA</a>
                        <a style={styleTaga} href="#contact">PARCEIROS</a>
                        <a style={styleTaga} href="#about">CONTATO</a>
                        {
                            !loadingAuth && 
                            (
                                !nickname?(
                                    <ButtonAuth onClick={logar}>LOGIN COM A TWITCH</ButtonAuth>
                                ):
                                (
                                    <ContainerNickname>
                                        <ContentNickname>
                                            <Nickname>
                                                {nickname}
                                            </Nickname>
                                        </ContentNickname>
                                        <ContainerDropDown className='dropDownNicname'>
                                            <ItemDropDown>
                                                <a style={styleTaga} href={`/user/${nickname}`}>Perfil</a>
                                            </ItemDropDown>
                                            <ItemDropDown style={{padding:10}} onClick={logOut}>
                                                Sair
                                            </ItemDropDown>
                                        </ContainerDropDown>
                                    </ContainerNickname>
                                )
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
                            <li><a style={styleTaga} href="/">HOME</a></li>
                            <li><a style={styleTaga} href="/loja">LOJA</a></li>
                            <li><a style={styleTaga} href="#contact">PARCEIROS</a></li>
                            <li><a style={styleTaga} href="#about">CONTATO</a></li>
                            {
                                !loadingAuth && 
                                (
                                    !nickname?(
                                        <ButtonAuth onClick={logar}>LOGIN COM A TWITCH</ButtonAuth>
                                    ):
                                    (
                                        <ContainerNickname>
                                            <ContentNickname onClick={setVisibleDropDownMobile}>
                                                <Nickname>
                                                    {nickname}
                                                </Nickname>
                                            </ContentNickname>
                                            <ContainerDropDownMobile status={dropDawnMobile}  className='dropDownMobile'>
                                                <ItemDropDownMobile>
                                                    <a style={styleTaga} href={`/user/${nickname}`}>Perfil</a>
                                                </ItemDropDownMobile>
                                                <ItemDropDownMobile onClick={logOut}>
                                                    Sair
                                                </ItemDropDownMobile>
                                            </ContainerDropDownMobile>
                                        </ContainerNickname>
                                    )
                                )
                            }
                        </Ul>
                </ContentSmall>
            </Content>
        </Container>

    )
}