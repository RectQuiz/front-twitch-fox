import styled from "styled-components";
import colors from "../../../../../../../styles/colors";

export const ContainerLogoParceiro = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  /* margin-bottom: 10px; */
  @media (max-width: 500px) {
    margin: 0;
  }
  :focus {
    border: none;
    outline: none;
    outline-style: none;
  }
`;

export const ContentLogoParceiro = styled.div`
  background-color: #aaa;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  /* position: relative; */
  border: 3px solid ${colors.color_jokerz_2};
`;

export const LogoParceiro = styled.img`
  /* position: absolute;
    bottom: 0; */
  width: 100%;
`;
