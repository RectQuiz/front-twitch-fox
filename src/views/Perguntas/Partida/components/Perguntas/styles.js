import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  /* background-color:red; */
  padding-right:25px;
  padding-left:25px;
  padding-bottom:20px;
  padding-right:600px;
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:flex-end;
`;

export const ContainerPergunta = styled.div`
    /* background-color:blue; */
    flex:9;
    padding:10px;
    padding-right:20px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
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

export const ContainerTimer = styled.div`
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
    margin-bottom:10px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    overflow:auto;
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

export const ContentAlternativa = styled.div`
    width:49%;
    background-color:${(props)=>{
        return props.statusSelect && props.showResposta && props.statusResposta?'#0D7F35':
         props.statusSelect && props.showResposta && !props.statusResposta?'#C5142F':
         props.showResposta && props.statusResposta?'#0D7F35'
        :props.statusSelect?'#DDE117':'#0B0530';
    }};
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
    color:${(props)=>{
        return props.statusSelect && props.showResposta && props.statusResposta?'#fff':
         props.statusSelect && props.showResposta && !props.statusResposta?'#fff':
         props.showResposta && props.statusResposta?'#fff'
         :props.statusSelect?'#0B0530':'#fff';
    }};
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
    color:${(props)=>{
        return props.statusSelect && props.showResposta && props.statusResposta?'#fff':
         props.statusSelect && props.showResposta && !props.statusResposta?'#fff':
         props.showResposta && props.statusResposta?'#fff'
        :props.statusSelect?'#0B0530':'#DDE117';
    }};
    margin-right:7px;
`;

export const ContainerOpcoes = styled.div`
    width:65%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-top:5px;
    /* padding-left:5px; */
    /* padding-right:5px; */
    /* background-color:blue; */
`;

export const ContainerOpcoesJogo = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    padding-bottom:100px;
    /* background-color:green; */
    /* padding-right:5px; */
`;

export const ContainerOpcoesPremios = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    /* background-color:red; */
    flex:5;
    /* padding-left:15px; */
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
    margin-left:10px;
`;

export const ContentOpcoesPremio = styled.button`
    height: 6vw;
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

export const ContentOpcoesPremioResultado = styled.div`
    height: 7vw;
    width: 7vw;
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
    border-radius:3px;
    /* border-radius: 50%; */
    /* background-color:#fff; */
    /* border: 2px solid #141414; */
`;

export const ContentLabelOpcoesPremio = styled.div`
    width:100%;
    height:30%;
`;

export const LabelOpcoesPremio = styled.div`
    background-color:${(props)=>props.fundo?props.fundo:'#0B0530'};
    color:${(props)=>props.color?props.color:'#0B0530'};
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

export const ContentImageResultado = styled.div`
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
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContentResultado = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    /* background-color:red; */
    padding-left:30px;
    padding-right:30px;
`;

export const TituloResultado = styled.span`
    color:#fff;
    font-weight:bold;
    font-size:30px;
    /* background-color:green; */
    flex:5;
    text-align:center;
`;

export const ContainerTimerNovo = styled.div`
    flex:1;
    /* background-color:red; */
    /* padding:7px; */
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding-bottom:100px;
    /* border:2px solid #fff;
    border-radius:3px; */
`;

export const ContentTimerNovo = styled.div`
    width:100%;
    /* background-color:#0B0530;
    border:2px solid #fff; */
    border-radius:3px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    position:relative;

`;

export const TimerC4 = styled.span`
    font-weight:bold;
    font-size:15px;
    color:#DDE117;
    position:absolute;
    top:39px;
    left:67px;
`;

export const ContentImageC4 = styled.button`
    /* background-color:yellow; */
    width:160px;
    height:170px;
    :focus{
        outline: thin dotted;
        outline: 0px auto -webkit-focus-ring-color;
        outline-offset: 0px;
    }

    /* padding:3px; */
`;

export const OpcoesPremioC4 = styled.img`
    /* object-fit: contain; */
    width: 100%;
    height:100%;
    /* border-radius: 50%; */
    /* background-color:#fff; */
    /* border: 2px solid #141414; */
`;

export const ContainerPainel = styled.div`
    width:65%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    /* padding-left:5px; */
    /* padding-right:5px; */
    background-color:#fff;
    border:2px solid #fff;
    border-radius:10px;
    padding:15px;
    margin-bottom:150px;
    flex-wrap:wrap;
`;

export const ContainerOpcoesPainel = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    /* flex-wrap:wrap; */
    /* padding-bottom:100px; */
    /* background-color:green; */
    width:100%;
    /* padding-right:5px; */
`;

export const ContentOpcao = styled.div`
    /* padding-right:15px; */
    margin:5px;
    flex:${(props)=>props.flex?props.flex:3};
    /* background-color:blue; */
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

export const ButtonOpcao = styled.button`
  background-color:#0B0530;
  border: 2px solid #fff;
  border-radius:10px;
  padding:10px;
  width:100%;
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
   text-transform:uppercase;
`;