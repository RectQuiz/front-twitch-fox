import React from "react";
import { NameParceiro } from "../../../../../../Home/components/Parceiros/styles";
import { API_URL } from "../../../../../../../services/config";

import {
  ContainerLogoParceiro,
  ContentLogoParceiro,
  LogoParceiro,
} from "./styles";

function Partner({ parceiro, OpenDetailPartner }) {
  const picture_rgx = /uploads/;
  let test_rgx = picture_rgx.exec(parceiro.id_person.picture);
  console.log(picture_rgx.exec(parceiro.id_person.picture));
  let picture = parceiro.id_person.picture
    ? test_rgx && test_rgx.length > 0
      ? `${API_URL}/${parceiro.id_person.picture}`
      : parceiro.id_person.picture
    : "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg";
  return (
    <ContainerLogoParceiro onClick={OpenDetailPartner}>
      <ContentLogoParceiro>
        <LogoParceiro src={picture} />
      </ContentLogoParceiro>
      <NameParceiro>{parceiro.id_person.nickname}</NameParceiro>
    </ContainerLogoParceiro>
  );
}

export default Partner;
