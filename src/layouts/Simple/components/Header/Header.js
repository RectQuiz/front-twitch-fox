import React, { useState } from "react";
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
  ItemDropDownMobile,
} from "./styles";
// import { useHistory } from 'react-router-dom';
import menu from "../../../../assets/images/menu.png";
import { API_URL } from "../../../../services/config";
// import { Link } from 'react-router-dom';
export default function Header({
  open,
  setOpen,
  logar,
  loadingAuth,
  nickname,
  user,
  loadingUser,
  channel,
}) {
  // let history = useHistory();
  const [itemSelect, setItemSelect] = useState(0);
  const [dropDawnMobile, setDropDawnMobile] = useState(false);

  // console.log("itemSelect: ",itemSelect);
  const headers = [
    {
      active: true,
      name: "HOME",
      index: 0,
      rota: "/home",
      channel: true,
    },
    {
      active: channel ? true : false,
      name: "LOJA",
      index: 1,
      rota: "/loja",
      channel: true,
    },
    {
      active: channel ? user && !loadingUser : false,
      name: "ROLETA",
      index: 2,
      rota: "/roleta",
      channel: true,
    },
    {
      active: channel ? user && !loadingUser : false,
      name: "PARCEIROS",
      index: 3,
      rota: "/home",
      channel: false,
    },
    // {
    //     name:"PARCEIROS",
    //     index:2,
    //     rota:"#contact"
    // },
    // {
    //     name:"CONTATO",
    //     index:3,
    //     rota:"#about"
    // }
  ];

  const setVisibleDropDownMobile = () => {
    console.log("visibleInfoUser: ", dropDawnMobile);
    setDropDawnMobile(!dropDawnMobile);
  };

  const styleTaga = {
    cursor: loadingAuth ? "not-allowed" : "",
    pointerEvents: loadingAuth ? "none" : "auto",
  };

  const logOut = () => {
    localStorage.removeItem("@siteJokerz/token");
    localStorage.removeItem("@siteJokerz/nickname");
    window.location.reload(false);
  };

  function selectItem(number) {
    setItemSelect(number);
  }

  const picture_rgx = /uploads/;
  let test_rgx = picture_rgx.exec(
    channel && channel.id_person && channel.id_person.picture
  );
  let picture =
    channel && channel.id_person && channel.id_person.picture
      ? test_rgx && test_rgx.length > 0
        ? `${API_URL}/${channel.id_person.picture}`
        : channel.id_person.picture
      : "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg";

  return (
    <Container>
      <Content>
        <ContentBig>
          <ContainerLogo>
            {channel && <ImageLogo src={picture} alt="logo" />}
            <TitleLogo>{channel && channel.name}</TitleLogo>
          </ContainerLogo>

          <ContainerButtonsNav>
            {headers.map((header, index) => {
              if (header.active) {
                return (
                  <a
                    key={index}
                    style={styleTaga}
                    className={`${itemSelect === header.index ? "item" : ""}`}
                    onClick={() => selectItem(header.index)}
                    href={`${header.rota}${
                      channel && header.channel ? "/" + channel.name : ""
                    }`}
                  >
                    {header.name}
                  </a>
                );
              }
            })}
            {!loadingAuth &&
              (!nickname ? (
                <ButtonAuth onClick={logar}>LOGIN COM A TWITCH</ButtonAuth>
              ) : (
                <ContainerNickname>
                  <ContentNickname>
                    <Nickname>{nickname}</Nickname>
                  </ContentNickname>
                  <ContainerDropDown className="dropDownNicname">
                    {!loadingUser &&
                      user &&
                      (user.streamer ? (
                        <ItemDropDown>
                          <a style={styleTaga} href={`/dashboard`}>
                            Dashboard
                          </a>
                        </ItemDropDown>
                      ) : (
                        <ItemDropDown>
                          <a
                            style={styleTaga}
                            href={`/user${channel ? "/" + channel.name : ""}`}
                          >
                            Perfil
                          </a>
                        </ItemDropDown>
                      ))}
                    <ItemDropDown style={{ padding: 10 }} onClick={logOut}>
                      Sair
                    </ItemDropDown>
                  </ContainerDropDown>
                </ContainerNickname>
              ))}
          </ContainerButtonsNav>

          <ContainerButtonMenu onClick={() => setOpen(!open)}>
            <ImageMenu src={menu} />
          </ContainerButtonMenu>
        </ContentBig>

        <ContentSmall open={open}>
          <Ul open={open}>
            {headers.map((header, index) => {
              if (header.active) {
                return (
                  <li key={index}>
                    <a
                      style={styleTaga}
                      href={`${header.rota}${
                        channel && header.channel ? "/" + channel.name : ""
                      }`}
                      onClick={() => selectItem(header.index)}
                    >
                      {header.name}
                    </a>
                  </li>
                );
              }
            })}
            {!loadingAuth &&
              (!nickname && !loadingUser && !user ? (
                <ButtonAuth onClick={logar}>LOGIN COM A TWITCH</ButtonAuth>
              ) : (
                <ContainerNickname>
                  <ContentNickname onClick={setVisibleDropDownMobile}>
                    <Nickname>{nickname}</Nickname>
                  </ContentNickname>
                  <ContainerDropDownMobile
                    status={dropDawnMobile}
                    className="dropDownMobile"
                  >
                    {!loadingUser &&
                      user &&
                      (user.streamer ? (
                        <ItemDropDownMobile>
                          <a style={styleTaga} href={`/dashboard`}>
                            Dashboard
                          </a>
                        </ItemDropDownMobile>
                      ) : (
                        <ItemDropDownMobile>
                          <a style={styleTaga} href={`/user`}>
                            Perfil
                          </a>
                        </ItemDropDownMobile>
                      ))}
                    <ItemDropDownMobile onClick={logOut}>
                      Sair
                    </ItemDropDownMobile>
                  </ContainerDropDownMobile>
                </ContainerNickname>
              ))}
          </Ul>
        </ContentSmall>
      </Content>
    </Container>
  );
}
