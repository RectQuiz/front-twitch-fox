import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  /* background-color:red; */
  padding-right:25px;
  padding-left:25px;
  padding-bottom:50px;
  padding-right:400px;
`;

export const ContainerPergunta = styled.div`
    /* background-color:blue; */
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;

export const ContainerTimer = styled.div`
    width:20%;
    background-color:#808080;
    padding:10px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    border: solid #4F4F4F;
    border-top-width:3px;
    border-left-width:3px;
    border-right-width:3px;
    border-bottom-width:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentPergunta = styled.div`
    width:100%;
    background-color:#808080;
    border-radius:10px;
    padding:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContainerTitulo = styled.div`
    width:100%;
    background-color:	#A9A9A9;
    border-radius:10px;
    padding:10px;
`;

export const ContainerAlternativas = styled.div`
    width:100%;
    /* background-color:#228; */
    padding:10px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    flex:1;
`;

export const TituloPergunta = styled.p`
    text-align:center;
    color:#363636;
    font-weight:bold;
`;

export const ContentAlternativa = styled.button`
    width:40%;
    background-color:#4F4F4F;
    padding:5px;
    display:flex;
    border-radius:10px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:5px;
    /* flex:5; */
    box-shadow: 0px 0px 3px 0px 	#1C1C1C;
    :active {
        box-shadow: 0px 0px 0px 0px 	#1C1C1C;
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;

export const TextoAlternativa = styled.span`
    color:#fff;
    font-weight:bold;
`;

export const Timer = styled.span`
    font-weight:bold;
    font-size:20px;
    color:#fff;
`;

export const ContainerOpcoes = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-top:10px;
`;

export const ContentOpcao = styled.div`
    padding:10px;
`;

export const ButtonOpcao = styled.button`
  background-color:#A9A9A9;
  border-radius:10px;
  padding:10px;
  color:#363636;
  font-weight:bold;
    box-shadow: 0px 0px 3px 0px #696969;
    :active {
        box-shadow: 0px 0px 0px 0px #696969;
    }
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;