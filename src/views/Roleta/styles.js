import styled from "styled-components";
import colors from "../../styles/colors";

export const ImageFundo = styled.div``;

export const Content = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  padding-top: 165px;
`;

export const BackgroundColor = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  background-color: #05060d;
  /* background-color: #0506; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 200px;
  /* opacity:0.3; */
`;

export const ContentInfoPoints = styled.div`
  /* width:100%; */
  /* background-color:green; */
  /* padding:15px; */
  border: 1px solid rgba(76, 76, 84);
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-top: 30px;
`;

export const PointsLabel = styled.div`
  padding: 10px;
  background-color: rgba(76, 76, 84);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: 1px solid rgba(41, 41, 46);
  color: #fff;
`;

export const PointsValue = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  color: orange;
`;

export const ContainerSelectInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelSelect = styled.div`
  color: ${colors.white};
`;

export const ContentTrocarCanal = styled.button`
  width: 200px;
  background-color: ${colors.color_jokerz_1};
  border-radius: 10px;
  padding: 7px;
  text-decoration: none;
  cursor: pointer;
  :active {
    width: 190px;
  }
`;

export const ContainerButtonTrocarCanal = styled.div`
  color: ${colors.white};
  text-align: center;
`;

export const ContainerInput = styled.div`
  /* background-color:#44f; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-bottom: 10px;
  .image_premio {
    width: 100%;
    text-align: center;
    /* background-color:#fff; */
  }
  margin-bottom: 10px;
`;

export const InputValue = styled.input`
  width: 80%;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #141414;
  text-align: center;
`;

export const ContainerGeralSelectCanal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  /* background-color: red; */
`;

export const ContentHeaderSelectCanal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  /* background-color: red; */
`;

export const ContentTitleSelctCanal = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
`;

export const ContentSubTitleSelectCanal = styled.div`
  color: ${colors.color_jokerz_1};
`;

export const ContainerSelectCanal = styled.div`
  /* width: 200px; */
  border: 2px solid ${colors.color_jokerz_2};
  padding: 10px;
  border-radius: 10px;
  /* border-top-right-radius: 0px;
    border-bottom-right-radius: 0px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  min-height: 50vh;
  max-height: 50vh;
  position: relative;
`;

export const ContentSelectQ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: ${colors.red}; */
`;

export const ContentSelect = styled.div`
  overflow: auto;

  min-width: 300px;
  ::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 0;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: ${colors.primary};
    opacity: 0.1;
    -webkit-border-radius: 0;
    -webkit-border-bottom-right-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: ${colors.color_jokerz_2};
    -webkit-border-radius: 8px;
  }
`;

export const ContentSelectCanal = styled.button`
  width: 100%;
  min-width: 300px;
  max-width: 300px;
  background-color: ${colors.color_jokerz_6};
  /* border:2px solid ${colors.color_jokerz_2}; */
  padding: 10px;
  height: 100px;
  border-radius: 10px;
  /* display: flex; */
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  :hover {
    background-color: ${colors.black + 5};
    border: 1px solid ${colors.white};
  }
  :focus {
    border: none;
    outline: none;
    outline-style: none;
  }
  :active {
    background-color: ${colors.color_jokerz_6};
  }
`;

export const ContentImageCanal = styled.div`
  background-color: #aaa;
  border-radius: 50%;
  width: 80px;
  min-width: 80px;
  height: 80px;
  min-height: 80px;
  overflow: hidden;
  /* position: relative; */
  border: 2px solid ${colors.color_jokerz_2};
  /* margin-bottom: 15px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageCanal = styled.img`
  /* position: absolute;
    bottom: 0; */
  width: 100%;
  height: 100%;
`;

export const ContentNomeCanal = styled.div`
  color: ${colors.white};
  margin-left: 10px;
`;

export const ContentDescCanal = styled.div`
  color: ${colors.color_jokerz_1};
  font-size: 14px;
  margin-left: 10px;
  flex-wrap: nowrap;
`;

export const ContentInfoCanal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* background-color: red; */
`;

export const ContinueTop = styled.div`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 20px;
  background-image: linear-gradient(
    to bottom,
    ${colors.color_jokerz_6},
    ${colors.transparent2}
  );
`;

export const ContinueBottom = styled.div`
  /* border-top-right-radius: 9px;
    border-bottom-right-radius: 9px; */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background-image: linear-gradient(
    to bottom,
    ${colors.transparent2},
    ${colors.color_jokerz_6}
  );
`;

export const ContentDescCanalProba = styled.div`
  color: ${colors.color_jokerz_2};
  font-size: 14px;
  /* margin-left: 10px; */
`;

export const ContainerProbalilidade = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  margin-left: 10px;
`;
