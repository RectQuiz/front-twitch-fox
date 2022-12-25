import React, { useState } from "react";

import {
  Container,
  Content,
  TitleParceiros,
  DescParceiros,
  ContainerLogoParceiros,
  ContentLogoParceiro,
  LogoParceiro,
  NameParceiro,
  ContainerLogoParceiro,
} from "./styles";
import { API_URL } from "../../../../services/config";

function Parceiros({ channels }) {
  function testePictureRgx(channel) {
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
    console.log("teste picture: ", picture);
    return picture;
  }
  return (
    channels &&
    channels.length > 0 && (
      <Container>
        <Content>
          <TitleParceiros>lives parceiras</TitleParceiros>
          <DescParceiros>Farme pontos em todas as lives!</DescParceiros>
          <ContainerLogoParceiros>
            {channels.map((parceiro) => {
              return (
                <>
                  <ContainerLogoParceiro
                    href={parceiro.name ? `home/${parceiro.name}` : "#"}
                    target="_blank"
                    key={parceiro}
                  >
                    <ContentLogoParceiro>
                      <LogoParceiro src={testePictureRgx(parceiro)} />
                    </ContentLogoParceiro>
                    <NameParceiro>{parceiro.id_person.nickname}</NameParceiro>
                  </ContainerLogoParceiro>
                </>
              );
            })}
          </ContainerLogoParceiros>
        </Content>
      </Container>
    )
  );
}

export default Parceiros;
