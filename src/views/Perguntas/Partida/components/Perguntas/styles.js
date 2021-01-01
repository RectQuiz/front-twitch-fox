import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  /* background-color:red; */
  padding-right:25px;
  padding-left:25px;
  padding-bottom:20px;
  padding-right:600px;
`;

export const ContainerPergunta = styled.div`
    /* background-color:blue; */
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    width:auto;
`;

export const HeaderPergunta = styled.div`
    width:65%;
    /* background-color:red; */
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

export const ContainerTimer = styled.button`
    /* width:20%; */
    background-color:#0B0530;
    /* padding:7px; */
    padding:10px;
    /* padding-left:7px;
    padding-right:7px; */
    margin-right:10px;
    border-radius:3px;
    border: 2px solid #fff;
    border-bottom-width:0.1px;
    /* border-bottom-width:0px; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
    /* transform:translateY(3px); */
`;

export const ContentPergunta = styled.div`
    width:65%;
    /* background-color:#191970; */
    /* border: solid #4F4F4F; */
    /* border-top-width:0px; */
    border-radius:5px;
    border-top-left-radius:0px;
    /* border-top-right-radius:0px; */
    /* padding:15px; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContainerTitulo = styled.div`
    width:100%;
    background-color:#0B0530;
    border: 2px solid #fff;
    padding:5px;
    margin-bottom:5px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
`;

export const ContainerAlternativas = styled.div`
    width:100%;
    /* background-color:#228; */
    /* padding:10px; */
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-start;
    flex-wrap:wrap;
    flex:1;
`;

export const TituloPergunta = styled.span`
    /* background-color:red; */
    text-align:center;
    color:#fff;
    font-weight:bold;
    text-align:left;
    font-size:20px;
    filter: ${(props)=>props.status?'blur(0px)':'blur(10px)'};
`;

export const ContentAlternativa = styled.button`
    width:49%;
    background-color:${(props)=>props.statusSelect?'#0D7F35':'#0B0530'};
    padding:5px;
    display:flex;
    border-radius:3px;
    border: solid 2px #fff;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    /* margin:5px; */
    margin-bottom:10px;
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
    min-width:40px;
    color:#fff;
    font-weight:bold;
    font-size:18px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    filter: ${(props)=>props.status?'blur(0px)':'blur(10px)'};
`;

export const Timer = styled.span`
    font-weight:bold;
    font-size:22px;
    color:#DDE117;
`;

export const LetraAlternativa = styled.span`
    font-weight:bold;
    font-size:20px;
    color:#DDE117;
    margin-right:7px;
`;

export const ContainerOpcoes = styled.div`
    width:65%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-top:5px;
    padding-left:5px;
    padding-right:5px;
    /* background-color:blue; */
`;

export const ContentOpcao = styled.div`
    padding:10px;
`;

export const ButtonOpcao = styled.button`
  background-color:#fff;
  border-radius:10px;
  padding:10px;
  color:${(props)=>props.color?props.color:'#0B0530'};
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

export const ContainerOpcoesJogo = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
    flex:5;
    /* background-color:green; */
    padding-right:15px;
`;

export const ContainerOpcoesPremios = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    /* background-color:red; */
    flex:5;
    padding-left:15px;
`;

export const ContainerOpcoesPremios2 = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    /* background-color:red; */
    flex:5;
    padding-top:20px;
    padding-bottom:20px;
`;

export const ContentOpcoesPremio = styled.button`
    height: 5vw;
    width: 5vw;
    border-radius:7px;
    overflow: hidden;
    border:2px solid #fff;
    border-bottom-right-radius:0px;
    border-bottom-left-radius:0px;
    background-color:#0B0530;
    box-shadow: 1px 1px 15px -5px black;
    opacity:${(props)=>props.status?0.4:1};
    /* cursor: pointer; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }
`;

export const OpcoesPremio = styled.img`
    object-fit: contain;
    width: 100%;
    height:100%;
    /* border-radius: 50%; */
    /* background-color:#fff; */
    /* border: 2px solid #141414; */
`;

export const ContentLabelOpcoesPremio = styled.div`
    width:100%;
    height:30%;
`;

export const LabelOpcoesPremio = styled.div`
    background-color:${(props)=>props.color?props.color:'#0B0530'};
    width:100%;
    height:100%;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentImage = styled.div`
    /* background-color:yellow; */
    height:70%;
    padding:3px;
`;

export const ContainerResultado = styled.div`
    width:100%;
    background-color:#0B0530;
    border: 2px solid #fff;
    border-radius:3px;
    padding:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentResultado = styled.div`

`;

export const TituloResultado = styled.span`
    color:#fff;
    font-weight:bold;
`;