import React from "react";
import { FaHome, FaBackward, FaSyncAlt } from "react-icons/fa";
import { useHistory } from "react-router";
import colors from "../../styles/colors";

import {
  Container,
  ContentTitleHeader,
  TitleHeader,
  SubTitleHeader,
  ContentIconsHeader,
  ContentIcons,
} from "./styles";

function HeaderDashBoard({ title, subtitle, reload = () => {} }) {
  const history = useHistory();

  function back() {
    // history.push("/home");
    history.goBack();
  }

  function backHomeSite() {
    // history.push("/home");
    history.push("/home");
  }

  return (
    <Container>
      <ContentTitleHeader>
        <SubTitleHeader>{subtitle}</SubTitleHeader>
        <TitleHeader>{title}</TitleHeader>
      </ContentTitleHeader>
      <ContentIconsHeader>
        <ContentIcons onClick={back}>
          <FaBackward size={30} color={colors.black} />
        </ContentIcons>
        <ContentIcons onClick={backHomeSite}>
          <FaHome size={30} color={colors.black} />
        </ContentIcons>
        <ContentIcons onClick={reload}>
          <FaSyncAlt size={30} color={colors.black} />
        </ContentIcons>
      </ContentIconsHeader>
    </Container>
  );
}

export default HeaderDashBoard;
