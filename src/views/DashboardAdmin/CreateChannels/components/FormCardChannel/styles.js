import styled from "styled-components";
import colors from "../../../../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  /* background-color:#fff; */
`;

export const Content = styled.div`
  /* background-color: #bdbdbd; */
  width: 100%;
  max-width: 40vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-width: 1px;
  border-color: #bdbdbd;
  /* @media (max-width: 500px) { */
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 40px;
  flex: 1;
  @media (max-width: 500px) {
    max-width: 90vw;
  }
  /* background-color:#fd5; */
  /* } */
`;

export const FormProduct = styled.form`
  width: 100%;
  background-color: #808080;
  border-radius: 12px;
  border: 4px solid #363636;
`;

export const HeaderForm = styled.div`
  width: 100%;
  background-color: #1c1c1c;
  padding: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 5px solid #141414; */
`;

export const TitleForm = styled.header`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

export const ContentForm = styled.div`
  /* background-color:#44f; */
  border-radius: 8px;
  padding-left: 10%;
  padding-right: 10%;
  /* padding-top:20px; */
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContainerInput = styled.div`
  /* background-color:#44f; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
  padding-bottom: 10px;
  .image_premio {
    width: 100%;
    text-align: center;
    /* background-color:#fff; */
  }
`;

export const ContainerSelectInput = styled.div`
  /* background-color: #44f; */
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const ContentInputCheckbox = styled.div`
  /* background-color: brown; */
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const LabelForm = styled.label`
  color: #141414;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InputForm = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #141414;
`;

export const labelInputCheckbox = styled.span`
  margin-left: 15px;
`;

export const InputCheckboxForm = styled.input`
  margin-right: 15px;
  margin-left: 10px;
  position: relative;
  cursor: pointer;

  :before {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    top: 0;
    left: 0;
    background-color: ${colors.white};
    border-radius: 5px;
    border: 1.5px black solid;
  }
  :checked:after {
    content: "";
    display: block;
    width: 7px;
    height: 15px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 4px;
    left: 9px;
  }
`;

export const ErroForm = styled.span`
  padding-top: 5px;
  color: #8b0000;
  font-size: 12px;
  text-transform: uppercase;
`;

//FILE
export const ContentImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50%;
  max-height: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  /* background-color: red; */
  /* padding:15px; */
  /* border-radius:7px 7px 0px 0px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom: 2px solid #fff;
  position: relative;
  /* margin-bottom:5px; */
`;

export const ContentImageInput = styled.label`
  position: relative;
  height: 100%;
  width: 28vw;
  min-width: 200px;
  min-height: 200px;
  /* margin: 50px auto; */
  /* border-radius: 50%; */
  overflow: hidden;
  /* background-color:#1c1c; */
  /* box-shadow: 1px 1px 15px -5px black; */
  transition: all 0.3s ease;
  /* background-color:#1c1c1c; */
  border: none;
  outline: none;
  padding: 0.7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.05);
  }
  margin: 0;
`;

export const ContentImageInputEmpty = styled.label`
  position: relative;
  height: 100%;
  width: 28vw;
  min-width: 200px;
  min-height: 200px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  padding: 0.7vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ImagePremioCad = styled.img`
  vertical-align: middle;
  object-fit: contain;
  height: 100%;
  width: 100%;
  border: none !important;
  background: transparent !important;
  border: 1px solid ${colors.white};
  /* border-radius: 30%; */
  /* background-color:#fff; */
  transition: all 0.3s ease;
  :focus {
    border: none;
    outline: none;
  }
  transition: all 0.3s ease;
`;

export const ContentInputFile = styled.div`
  /* background-color:red; */
  margin: 0;
`;

export const InputFormFile = styled.input`
  display: none !important;
  margin: 0;
`;

export const InputRequirede = styled.div`
  color: #a52a2a;
  margin-left: 5px;
`;

export const ContainerStickers = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: ${colors.primary_dashboard}; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  @media (max-width: 1400px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ContentStikerInput = styled.div`
  /* background-color: blue; */
  border: 2px solid ${colors.primary_dashboard};
  border-radius: 0.5vw;
  width: 180px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 5px;
  margin: 5px;
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const LabelSlotSticker = styled.div`
  color: ${colors.white};
  font-weight: bold;
`;

export const ContentDeleteSticker = styled.button`
  width: 100%;
  background-color: ${colors.red_dark};
  border-bottom-right-radius: 0.5vw;
  border-bottom-left-radius: 0.5vw;
  color: ${colors.white};
  font-weight: bold;
`;

export const ContentStickers = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5vw;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  /* max-width:10vw; */
  /* height:15vw; */
  /* min-height:50%;
    max-height:50%; */
  background-color: rgba(0, 0, 0, 0.4);
  /* background-color: red; */
  padding: 3px;
  /* border-radius:7px 7px 0px 0px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* border-bottom: 2px solid #fff; */
  position: relative;
  /* margin: 5px; */
  @media (max-width: 1400px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  /* margin-bottom:5px; */
`;

export const ContentSticker = styled.label`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 0.5vw;
  /* background-color:#fff; */
  border: none;
  outline: none;
  /* padding: 3px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageSticker = styled.img`
  vertical-align: middle;
  object-fit: contain;
  height: 100%;
  width: 100%;
  border: none !important;
  /* background: transparent !important; */
  border: 1px solid ${colors.white};
  /* border-radius: 30%; */
  /* background-color:#fff; */
  transition: all 0.3s ease;
  :focus {
    border: none;
    outline: none;
  }
  transition: all 0.3s ease;
  margin: 0;
`;

export const ContentStickerEmpty = styled.label`
  border-radius: 0.5vw;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  /* background-color:#fff; */
  border: none;
  outline: none;
  /* padding:0.7vw; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  /* background-color:#45f; */
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonForm = styled.button`
  background-color: #dc143c;
  padding: 7px;
  border-radius: 10px;
  min-width: 20%;
  color: #fff;
  border: 2px solid #141414;
  box-shadow: 0px 0px 3px 0px #4f4f4f;
  :active {
    box-shadow: 0px 0px 0px 0px #4f4f4f;
  }
  :focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
