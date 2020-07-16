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
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
export default function Header({open, setOpen, logar, loadingAuth }){
    let history = useHistory();
    const [ nickname, setNickname] = useState(null);
    const [ dropDawnMobile, setDropDawnMobile] = useState(false);

    useEffect(()=>{
        const cookies = new Cookies();
        // Cookies.set('teste', 'value');
        let cookieNick = cookies.get('nickname');
        let cookieSession = cookies.get('session');
        // console.log('cookieSession: ', cookieSession);
        if (cookieNick && cookieSession) {
            setNickname(cookieNick);
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
        const cookies = new Cookies();
        cookies.remove('nickname', { path: '/' });
        cookies.remove('session');
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
                        <Link style={styleTaga} to="/">HOME</Link>
                        <Link style={styleTaga} to="/loja">LOJA</Link>
                        <Link style={styleTaga} to="#contact">PARCEIROS</Link>
                        <Link style={styleTaga} to="#about">CONTATO</Link>
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
                                                <Link style={styleTaga} to={`/user/${nickname}`}>Perfil</Link>
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
                            <li><Link style={styleTaga} to="/">HOME</Link></li>
                            <li><Link style={styleTaga} to="/loja">LOJA</Link></li>
                            <li><Link style={styleTaga} to="#contact">PARCEIROS</Link></li>
                            <li><Link style={styleTaga} to="#about">CONTATO</Link></li>
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
                                                    Perfil
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