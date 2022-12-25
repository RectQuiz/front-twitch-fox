import React from "react";
import { useSelector } from "react-redux";
import { Container, Content } from "./styles";
export default function Footer() {
  const { channel } = useSelector(({ ChannelsReducer }) => ChannelsReducer);
  return (
    <Container>
      <Content>
        Copyright © 2022 {channel ? channel.name : ""}™ <br></br>
      </Content>
    </Container>
  );
}
