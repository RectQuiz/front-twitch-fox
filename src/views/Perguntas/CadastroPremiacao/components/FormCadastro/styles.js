import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height:auto;
    padding-top:20px;
    padding-bottom:20px;
    /* background-color:#fff; */
`;

export const Content = styled.div`
  /* background-color: #bdbdbd; */
  width: 100%;
  max-width: 1150px;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:flex-start;
  border-width:1px;
  border-color:#bdbdbd;
  /* @media (max-width: 500px) { */
    flex-direction:row;
    flex-wrap:wrap;
  padding-bottom:40px;
  flex:1;
    /* background-color:#fd5; */
  /* } */
`;

export const FormNivel = styled.form`
    width:100%;
    background-color:	#808080;
    border-radius:12px;
    border: 4px solid #363636;
`;

export const HeaderForm = styled.div`
    width:100%;
    background-color:#1c1c1c;
    padding:15px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    /* border: 5px solid #141414; */
`;

export const TitleForm = styled.header`
    font-weight:bold;
    font-size:20px;
    color:#fff;
`;

export const ContentForm = styled.div`
    /* background-color:#44f; */
    border-radius:8px;
    padding-left:10%;
    padding-right:10%;
    padding-top:20px;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
`;

export const ContainerInput = styled.div`
    /* background-color:#44f; */
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
    padding-bottom:10px;
    .image_premio{
        width:100%;
        text-align:center;
        /* background-color:#fff; */
    }
`;

export const LabelForm = styled.label`
    color:#141414;
    font-weight: bold;
`;

export const InputForm = styled.input`
    width:100%;
    padding:5px;
    border-radius:10px;
    border: 2px solid #141414;
`;

export const ErroForm = styled.span`
    padding-top:5px;
    color:#8B0000;
    font-size:12px;
    text-transform:uppercase;
`;

export const ContainerButton = styled.div`
    width:100%;
    /* background-color:#45f; */
    padding:5px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

export const ButtonForm = styled.button`
    background-color:#DC143C;
    padding:7px;
    border-radius:10px;
    min-width:20%;
    color:#fff;
    border: 2px solid #141414;
    box-shadow: 0px 0px 3px 0px #4F4F4F;
    :active {
        box-shadow: 0px 0px 0px 0px #4F4F4F;
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;

export const ContentSelect = styled.div`
    width:100%;
    background-color:#fff;
    border: 2px solid #141414;
    border-radius:7px;
    overflow:hidden;
`;

export const SelectNivel = styled.select`
    width:100%;
    border-radius:0px;
    border: 0px solid;
    padding:10px;
`;

export const OptionSelectNivel = styled.option`
    width: 100%;
    height: 50px;
    font-size: 15px;
    background: #f2f2f3;
    padding-left: 100px;
`;

export const InputFormFile = styled.input`
    display: none !important;
`;

export const LabelInputfile = styled.label`
    border-radius: 5px;
    border: 2px solid #141414;
    background-color:#1c1c1c;
    color: #fff;
    cursor: pointer;
    padding: 6px 20px;
`;

export const ContentInputFile = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
`;

export const ContentImageInput = styled.div`
    position: relative;
	height: 10vw;
	width: 10vw;
    min-width:200px;
    min-height:200px;
	margin: 50px auto;
	border-radius: 50%;
	overflow: hidden;
    background-color:#1c1c1c;
	box-shadow: 1px 1px 15px -5px black;
	transition: all .3s ease;
    background-color:#1c1c1c;
    padding:0.3vw;
	&:hover{
		transform: scale(1.05);
	}
`;

export const ImagePremioCad = styled.img`
    /* vertical-align: middle; */
    object-fit: contain;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color:#fff;
    border: 2px solid #141414;
	transition: all .3s ease;
`;
