import React, { useEffect, useState } from 'react';

import {
    Container,

    ContainerPergunta,
    ContainerTimer,
    ContentPergunta,
    ContainerTitulo,
    ContainerAlternativas,
    TituloPergunta,
    ContentAlternativa,
    LetraAlternativa,
    TextoAlternativa,
    Timer,
    HeaderPergunta,

    ContainerOpcoes,
    ContentOpcao,
    ButtonOpcao,
    ContainerOpcoesPremios,
    ContainerOpcoesPremios2,
    ContentOpcoesPremio,
    OpcoesPremio,
    ContentLabelOpcoesPremio,
    LabelOpcoesPremio,
    ContentImage,

    ContainerResultado,
    ContentResultado,
    TituloResultado,

    ContainerTimerNovo,
    ContentTimerNovo,
    TimerC4,
    ContentImageC4,
    OpcoesPremioC4,

    ContainerPainel,
    ContainerOpcoesPainel,

    ContentImageResultado,
    ContentOpcoesPremioResultado
} from './styles';
import Vazio from '../../../../../assets/images/vazio.png';
import c42 from '../../../../../assets/images/C42.png';
import MusicaInicio from '../../../../../assets/sounds/aparecer_pergunta.mp3';
import MusicaErrar from '../../../../../assets/sounds/errou.mp3';
import MusicaAcertar from '../../../../../assets/sounds/acertou.mp3';
import MusicaTimer from '../../../../../assets/sounds/timer.mp3';
// import MusicaC4 from '../../../../../assets/sounds/c4.mp3';
import { useDispatch } from 'react-redux';
import { atualizarPartida } from '../../../../../store/modules/partida/actions';
import { loadPerguntas } from '../../../../../store/modules/pergunta/actions';
import MusicaGranada from '../../../../../assets/sounds/granada.mp3';
import MusicaMolotov from '../../../../../assets/sounds/molotov.mp3';
import MusicaSmoke from '../../../../../assets/sounds/smoke.mp3';
import MusicaFlash from '../../../../../assets/sounds/flash.mp3';
import MusicaParar from '../../../../../assets/sounds/parar.mp3';

function Perguntas({
  partida,
  perguntas,
  premiacoes,
  history,
  statusRodada,
  setStatuRodada,
  statusTimer,
  setStatusTimer,
  setAjuda
}) {
  const dispatch = useDispatch();
  // const timerRef = useRef();
  const [ timer, setTimer ] = useState('00:00');
  const [ alternativaSelecionada, setAlternativaSelecionada ] = useState({});
  const [ pergunta, setPergunta ] = useState(null);
  const [ imagesOptionsErrar, setImagesOptionsErrar ] = useState(Vazio);
  const [ imagesOptionsParar, setImagesOptionsParar ] = useState(Vazio);
  const [ ref, setRef ] = useState();
  const [ alternativasTiradas, setAlternativasTiradas ] = useState([]);
  const [ imagesOptionsAcertar, setImagesOptionsAcertar ] = useState(Vazio);
  const [ musica ] = useState(new Audio(MusicaInicio));
  const [ musicaErrar ] = useState(new Audio(MusicaErrar));
  const [ musicaAcertar ] = useState(new Audio(MusicaAcertar));
  const [ musicaTimer ] = useState(new Audio(MusicaTimer));
  const [ musicaParar ] = useState(new Audio(MusicaParar));
  const [ showPergunta, setShowPergunta ] = useState(0); 
  const [ statusResultado, setStatusResultado ] = useState(false);
  const [ statusResposta, setStatusResposta ] = useState(false);
  const [ showResposta, setShowResposta ] = useState(false);
  const [ showParar, setShowParar ] = useState(false);
  
  const [ musicaGranada ] = useState(new Audio(MusicaGranada));
  const [ musicaMolotov ] = useState(new Audio(MusicaMolotov));
  const [ musicaSmoke ] = useState(new Audio(MusicaSmoke));
  const [ musicaFlash ] = useState(new Audio(MusicaFlash));
  // const [ musicaC4, setMusicaC4 ] = useState(new Audio(MusicaC4));


  useEffect(()=>{
    musica.preload = 'auto';
    musicaErrar.preload = 'auto';
    musicaAcertar.preload = 'auto';
    musicaTimer.preload = 'auto';
    musicaGranada.preload = 'auto';
    musicaMolotov.preload = 'auto';
    musicaSmoke.preload = 'auto';
    musicaFlash.preload = 'auto';
    musicaParar.preload = 'auto';
    
    if (partida && premiacoes) {
      if(partida.quant_acertos > 0){
        EscolherOpcoesPremiosErrar();
        EscolherOpcoesPremiosParar();
        EscolherOpcoesPremiosAcertar();
      }else{
        setImagesOptionsErrar(Vazio);
        setImagesOptionsParar(Vazio);
        EscolherOpcoesPremiosAcertar();
      }
    }
  },[partida,premiacoes]);

  // console.log('alternativasTiradas: ',alternativasTiradas);
  useEffect(()=>{
    if (statusRodada && (pergunta&&partida) && partida.ajuda_1 == true) {
      console.log('Ajuda 1 usada: ',partida);
      logicaAjuda(0);
    }
  },[partida&&partida.ajuda_1]);
  
  useEffect(()=>{
    if (statusRodada && (pergunta&&partida) && partida.ajuda_2 == true) {
      console.log('Ajuda 2 usada: ',partida);
      logicaAjuda(1);
    }
  },[partida&&partida.ajuda_2]);
  
  useEffect(()=>{

    if (statusRodada && (pergunta&&partida) && partida.ajuda_3 == true) {
      console.log('Ajuda 2 usada: ',partida);
      addTime(8);
    }else{
      console.log('n foi 2');
    }

  },[partida&&partida.ajuda_3]);
  
  function logicaAjuda(index) {
    if (partida.ajudas[index].number == 1) {
      musicaGranada.play();
      let alternativa1 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
      let alternativa2 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
      while(alternativa2 == alternativa1 || (pergunta.alternativas[alternativa1].number == pergunta.resposta || pergunta.alternativas[alternativa2].number == pergunta.resposta)){ 
        alternativa2 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
        alternativa1 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
        console.log('entrou: ');
      }
      addTime(5);
      setAlternativasTiradas({
        alternativa1:alternativa1,
        alternativa2:alternativa2
      });
    }
    if (partida.ajudas[index].number == 2) {
      console.log('flash');
      musicaFlash.play();
      clearInterval(ref);
      setTimer('00:00');
    }
    if (partida.ajudas[index].number == 3) {
      console.log('molotov');
      musicaMolotov.play();
      let quant = parseInt(Math.random() * (3 - 1) + 1);
      console.log('quant: ',quant);
      let alternativa1 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
      let alternativa2 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
      let alternativa3 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
      while(
          alternativa2 == alternativa1 ||
          (
            pergunta.alternativas[alternativa1].number == pergunta.resposta ||
            pergunta.alternativas[alternativa2].number == pergunta.resposta ||
            pergunta.alternativas[alternativa3].number == pergunta.resposta
          )
      ){ 
        alternativa2 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
        alternativa1 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
        alternativa3 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
        console.log('entrou: ');
      }
      addTime(5);
      setAlternativasTiradas({
        alternativa1:quant >= 1?alternativa1:{},
        alternativa2:quant >= 2?alternativa2:{},
        alternativa3:quant >= 3?alternativa3:{}
      });
    }
    if (partida.ajudas[index].number == 4) {
      console.log('smoke');
      musicaSmoke.play();
      clearInterval(ref);
      setTimer('00:00');
      setShowPergunta(0);
      setAlternativasTiradas({});
      setAlternativaSelecionada({});
      setShowResposta(false);

      setStatuRodada(false);
      setStatusTimer(false);
    }
  }

  function startTimer(duration,status=null) {
    console.log('status: ',status);
    console.log('statusTimer: ',statusTimer);
    console.log('statusRodada: ',statusRodada);
    var timer = duration, minutes, seconds;
    if ((statusTimer == false || status == true) && statusRodada == true) {
      if (!statusTimer) {
        musicaTimer.play();
      }
      setStatusTimer(true);
      let ref_ = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10); 
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          let time = minutes + ":" + seconds;
  
          setTimer(time);
  
          if (--timer < 0) {
              // timer = duration;
              clearInterval(ref_);
              setStatusTimer(false);
          }
      }, 1000);
      setRef(ref_);
    }
  }

  function selecionarAlternativa(alternativa) {
    if (alternativa != null && showPergunta >= 5) {
      setAlternativaSelecionada(alternativa);
    }
  }
  
  function verificarResposta() {
    console.log('showResposta: ',showResposta);
    if (statusRodada) {
      if (!showResposta) {
        if (alternativaSelecionada.number == pergunta.resposta) {
          musicaAcertar.play();
          clearInterval(ref);
          setTimer('00:00');
        }else{
          musicaErrar.play();
          clearInterval(ref);
          setTimer('00:00');
        }
        setShowResposta(true);
      }else{
        if (alternativaSelecionada.number == pergunta.resposta) {
            // musicaAcertar.play();
            // setTimeout(() => {
              console.log('acertou');
              let partidaChange = {
                quant_acertos: partida.quant_acertos+1,
                id:partida._id,
                // ajuda_1:false,
                // ajuda_2:false
              }
              setShowPergunta(0);
              setStatusResultado(true);
              setStatusResposta(true);
              setAlternativasTiradas({});
              dispatch(atualizarPartida(partidaChange));
              setAlternativaSelecionada({});
              setShowResposta(false);
      
              setStatuRodada(false);
              setStatusTimer(false);
            // }, 1000);
      }else{
        // musicaErrar.play();
        // setTimeout(() => {
          console.log('errou');
          setShowPergunta(0);
          setStatusResultado(true);
          setStatusResposta(false);
          setAlternativasTiradas({});
          setStatuRodada(false);
          setStatusTimer(false);
          setAlternativaSelecionada({});
          setShowResposta(false);
        // }, 1000);
      }
    }
    }
  }

  async function addTime(time) {
    clearInterval(ref);
    let result = async ()=>{
      setStatusTimer(false);
    };
    await result();
    let timerArray = timer.split(':');
    let timerMinutos = parseInt(timerArray[0]);
    let timerSegundos = parseInt(timerArray[1]);
    let timeTotal = (timerMinutos * 60) + timerSegundos;
    startTimer(timeTotal+time,true);
  }

  function EscolherPergunta() {
    if (showPergunta == 0) {
      dispatch(loadPerguntas());
    }
    if (statusRodada == true && showPergunta < 5) {
      setShowPergunta(showPergunta+1);
    }else{
      let perguntasDoNivel = perguntas.filter((pergunta2)=>{
        if (pergunta && pergunta.categoria) {
          console.log('pergunta2: ',pergunta2);
          console.log('pergunta: ',pergunta);
          return pergunta2._id != pergunta._id && 
          pergunta2.nivel.number == partida.nivel.number && 
          (pergunta2.categoria.name != pergunta.categoria.name) &&
          pergunta2.ativa == true;
        }else{
          return pergunta2.nivel.number == partida.nivel.number && pergunta2.ativa == true;;
        }
      });
      console.log('perguntasDoNivel: ',perguntasDoNivel);
      if (perguntasDoNivel.length > 0 && partida.quant_acertos < 15 && showPergunta == 0) {
        musica.play();
        // setTimeout(() => {
          setShowPergunta(1);
          let IndexperguntaAtual = Math.random() * (perguntasDoNivel.length - 0) + 0;
          let perguntaAtual = perguntasDoNivel[parseInt(IndexperguntaAtual)];
          setTimer(organizarTempo(perguntaAtual.tempo));
          setPergunta(perguntaAtual);
          setStatuRodada(true);
          console.log('foi');
          //********************************************************** */
          //**********************************************************
          //***  COMENTAR A LINHA A BAIXO QUANDO FOR FAZER TESTES  ***
          //**********************************************************
          //********************************************************** */
          // dispatch(atualizarPergunta({id:perguntaAtual._id,ativa:false}));
    
          console.log('perguntaAtual: ',perguntaAtual);
        // }, 1000);
      }else{
      }
    }
    // console.log('perguntasDoNivel: ',perguntasDoNivel);
  }
  
  function EscolherOpcoesPremiosErrar() {
      //Errar
      let if_errar = premiacoes.filter((premiacao)=>{
        if (partida.quant_acertos >= 5 && partida.quant_acertos < 10) {
          return premiacao.indice == 5;
        }
        if (partida.quant_acertos >= 10 && partida.quant_acertos < 14) {
          return premiacao.indice == 10;
        }
      });
      // console.log('if_errar: ',if_errar);
      if (if_errar.length > 0) {
        setImagesOptionsErrar('https://api.duarteanath.com.br/'+if_errar[0].image);
      }else{
        setImagesOptionsErrar(Vazio);
      }

  }
  
  function EscolherOpcoesPremiosParar() {
      //Parar
      let if_parar = premiacoes.filter((premiacao)=>{
        return premiacao.indice == partida.quant_acertos;
      });
      // console.log('if_parar: ',if_parar);
      if (if_parar.length > 0) {
        setImagesOptionsParar('https://api.duarteanath.com.br/'+if_parar[0].image);
      }else{
        setImagesOptionsParar(Vazio);
      }
  }

  function EscolherOpcoesPremiosAcertar() {
    //Acertar
    let if_acertar = premiacoes.filter((premiacao)=>{
      return premiacao.indice == partida.quant_acertos+1;
    });
    if (if_acertar.length > 0) {
      // console.log('if_acertar: ',if_acertar);
      setImagesOptionsAcertar('https://api.duarteanath.com.br/'+if_acertar[0].image);
    }else{
      setImagesOptionsAcertar(Vazio);
    }

  }

  function organizarTempo(duration) {
    var timer = duration, minutes, seconds;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10); 

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = minutes + ":" + seconds;
    return time;
  }
  
  function encerraPartida() {
    console.log('encerrando');
    let partidaChange = {
      status:'encerrada',
      id:partida._id
    }
    const nickname = localStorage.getItem('@siteJokerz/nickname');
    dispatch(atualizarPartida(partidaChange));
    history.push('user/'+nickname);
  }
  
  function pararPartida() {
    // if(!statusRodada){
      console.log('parando');
      let partidaChange = {
        status:'parada',
        id:partida._id
      }
      musicaParar.play();
      clearInterval(ref);
      setTimer('00:00');
      setStatusResultado(true);
      setStatuRodada(false);
      setStatusTimer(false);
      setStatusResposta(false);
      setShowParar(true);
      // dispatch(atualizarPartida(partidaChange));
    // }
  }

  function verificarAlternativa(alternativa) {
    return alternativa.number == pergunta.resposta;
  }

  return (
      <Container>
          <ContainerPergunta>

            <ContainerPainel>
              {
                statusResultado?
                (
                  statusResposta?
                  (
                    <ContainerOpcoesPainel>
                      <ContentOpcao flex={1}>
                        <ButtonOpcao onClick={()=>setStatusResultado(false)} color={'#0D7F35'}>
                            CONTINUAR
                        </ButtonOpcao>
                      </ContentOpcao>
                    </ContainerOpcoesPainel>
                  ):
                  (
                    <ContainerOpcoesPainel>
                      <ContentOpcao flex={1}>
                        <ButtonOpcao onClick={()=>encerraPartida()} color={'#C5142F'}>
                            ENCERRAR
                        </ButtonOpcao>
                      </ContentOpcao>
                    </ContainerOpcoesPainel>
                  )
                ):
                (
                  <>
                    {/*BOTOES*/}
                    <>
                    <ContainerOpcoesPainel>
                      <ContentOpcao flex={2}>
                        <ButtonOpcao onClick={encerraPartida} color={'#C5142F'}>
                            ENCERRAR
                        </ButtonOpcao>
                      </ContentOpcao>
                      <ContentOpcao flex={2}>
                        <ButtonOpcao onClick={pararPartida} color={'#A59D0E'}>
                            PARAR
                        </ButtonOpcao>
                      </ContentOpcao>
                      <ContentOpcao flex={2}>
                        <ButtonOpcao onClick={verificarResposta} color={'#0D7F35'}>
                            VERIFICAR
                        </ButtonOpcao>
                      </ContentOpcao>
                      <ContentOpcao flex={2}>
                        <ButtonOpcao onClick={()=>EscolherPergunta()} color={'#A59D0E'}>
                            PERGUNTA
                        </ButtonOpcao>
                      </ContentOpcao>
                      <ContentOpcao flex={2}>
                        <ButtonOpcao onClick={()=>startTimer(pergunta?pergunta.tempo:0)} color={'#fff'}>
                            TEMPO
                        </ButtonOpcao>
                      </ContentOpcao>
                    </ContainerOpcoesPainel>
                    </>
                    {/*ALTERNATIVAS*/}
                    <>
                      <ContainerOpcoesPainel>
                        <ContentOpcao flex={2.5}>
                          <ButtonOpcao onClick={()=>selecionarAlternativa(pergunta?pergunta.alternativas[0]:null)} color={'#A59D0E'}>
                              A )
                          </ButtonOpcao >
                        </ContentOpcao>
                        <ContentOpcao flex={2.5}>
                          <ButtonOpcao onClick={()=>selecionarAlternativa(pergunta?pergunta.alternativas[1]:null)} color={'#A59D0E'}>
                              B )
                          </ButtonOpcao>
                        </ContentOpcao>
                        <ContentOpcao flex={2.5}>
                          <ButtonOpcao onClick={()=>selecionarAlternativa(pergunta?pergunta.alternativas[2]:null)} color={'#A59D0E'}>
                              C )
                          </ButtonOpcao>
                        </ContentOpcao>
                        <ContentOpcao flex={2.5}>
                          <ButtonOpcao onClick={()=>selecionarAlternativa(pergunta?pergunta.alternativas[3]:null)} color={'#A59D0E'}>
                              D )
                          </ButtonOpcao>
                        </ContentOpcao>
                      </ContainerOpcoesPainel>
                    </>
                    {/*AJUDAS*/}
                    <>
                      <ContainerOpcoesPainel>
                        {
                          partida&&partida.ajudas.map((ajuda,index)=>{
                            return(
                              <ContentOpcao flex={partida.ajudas.length / 10}>
                                <ButtonOpcao 
                                  onClick={()=>setAjuda(index+1)} 
                                  color={
                                    ajuda.number == 1?'#3CB371':ajuda.number == 2?'#fff':
                                    ajuda.number == 3?'#B22222':ajuda.number == 4?'#B0C4DE':
                                    '#fff'
                                  }
                                  >
                                    {ajuda.name}
                                </ButtonOpcao>
                              </ContentOpcao>
                            )
                          })
                        }
                        <ContentOpcao flex={partida.ajudas.length / 10}>
                          <ButtonOpcao onClick={()=>setAjuda(3)} color={'#A59D0E'}>
                              DEFUSE
                          </ButtonOpcao>
                        </ContentOpcao>
                        </ContainerOpcoesPainel>
                    </>
                  </>
                )
              }
            </ContainerPainel>

            {
              !statusResultado&&
              (
                <HeaderPergunta>
                  <ContainerTimer>
                    <Timer status={showPergunta >= 1}>
                      {partida?(partida.quant_acertos == 0?`PERGUNTA ${1}`:partida.quant_acertos < 15?`PERGUNTA ${partida.quant_acertos + 1}`:'PARTIDA FINALIZADA'):0}
                    </Timer>
                  </ContainerTimer>
                </HeaderPergunta>
              )
            }
            
            <ContentPergunta>
              {
                !statusResultado&&
                (
                  <ContainerTitulo>
                    <TituloPergunta status={statusRodada}>
                        {statusRodada?pergunta.titulo:'Partida Ainda não iniciada'}
                    </TituloPergunta>
                  </ContainerTitulo>
                )
              }

              {
                statusResultado?
                (
                  <ContainerResultado>
                    <ContentResultado>
                      <TituloResultado>
                        {showParar?'VOCÊ FUGIU DA C4!':statusResposta?'A C4 FOI DESARMADA!':'A C4 EXPLODIU!'}
                      </TituloResultado>
                      <ContainerOpcoesPremios2>
                            {
                              statusResposta?
                              (
                                <ContentOpcoesPremioResultado>
                                  <ContentImageResultado>
                                    <OpcoesPremio src={imagesOptionsParar}/>
                                  </ContentImageResultado>
                                  <ContentLabelOpcoesPremio>
                                    <LabelOpcoesPremio color={'#fff'} fundo={'#0D7F35'}>
                                      GANHOU
                                    </LabelOpcoesPremio>
                                  </ContentLabelOpcoesPremio>
                                </ContentOpcoesPremioResultado>
                              ):
                              (

                                <ContentOpcoesPremioResultado>
                                  <ContentImageResultado>
                                    <OpcoesPremio src={showParar?imagesOptionsParar:imagesOptionsErrar}/>
                                  </ContentImageResultado>
                                    <ContentLabelOpcoesPremio>
                                      <LabelOpcoesPremio
                                        color={showParar?(imagesOptionsParar != Vazio?'#000':'#fff'):imagesOptionsErrar != Vazio?'#fff':'#fff'}
                                        fundo={showParar?(imagesOptionsParar != Vazio?'#D0C60C':'#C5142F'):imagesOptionsErrar != Vazio?'#0D7F35':'#C5142F'}>
                                        {showParar?(imagesOptionsParar != Vazio?'GUARDOU':'PERDEU'):imagesOptionsErrar != Vazio?'GANHOU':'PERDEU'}
                                      </LabelOpcoesPremio>
                                    </ContentLabelOpcoesPremio>
                                </ContentOpcoesPremioResultado>
                              )
                            }
                      </ContainerOpcoesPremios2>
                    </ContentResultado>
                  </ContainerResultado>
                ):
                (
                  <ContainerAlternativas>
                    {
                      statusRodada && (pergunta && pergunta.alternativas.length) > 0?
                        pergunta.alternativas.map((alternativa,index)=>{
                            return (
                              <ContentAlternativa
                                statusSelect={alternativaSelecionada._id == alternativa._id}
                                key={alternativa._id}
                                statusResposta={verificarAlternativa(alternativa)}
                                showResposta={showResposta}
                              >
                                <TextoAlternativa 
                                  statusSelect={alternativaSelecionada._id == alternativa._id} key={alternativa._id}
                                  statusResposta={verificarAlternativa(alternativa)}
                                  showResposta={showResposta}
                                  status={
                                    statusRodada && 
                                    !(alternativasTiradas.alternativa1 == index || alternativasTiradas.alternativa2 == index) &&
                                    showPergunta >= index+2
                                  }>
                                    <LetraAlternativa 
                                      statusSelect={alternativaSelecionada._id == alternativa._id}
                                      key={alternativa._id}
                                      statusResposta={verificarAlternativa(alternativa)}
                                      showResposta={showResposta}
                                    >
                                      {index == 0?'A':index == 1?'B':index == 2?'C':index == 3?'D':''}
                                  )
                                    </LetraAlternativa>
                                      {alternativa.name}
                                </TextoAlternativa>
                              </ContentAlternativa>
                            )
                        })
                      :(
                        <>
                          <ContentAlternativa>
                          <TextoAlternativa status={statusRodada}>
                            <LetraAlternativa>
                              A)
                            </LetraAlternativa>
                              Alternativa 1
                          </TextoAlternativa>
                        </ContentAlternativa>
                        <ContentAlternativa>
                          <TextoAlternativa status={statusRodada}>
                            <LetraAlternativa>
                              B)
                            </LetraAlternativa>
                              Alternativa 2
                          </TextoAlternativa>
                        </ContentAlternativa>
                        <ContentAlternativa>
                          <TextoAlternativa status={statusRodada}>
                            <LetraAlternativa>
                              C)
                            </LetraAlternativa>
                              Alternativa 3
                          </TextoAlternativa>
                        </ContentAlternativa>
                        <ContentAlternativa>
                          <TextoAlternativa status={statusRodada}>
                            <LetraAlternativa>
                              D)
                            </LetraAlternativa>
                              Alternativa 4
                          </TextoAlternativa>
                        </ContentAlternativa>
                      </>
                      )
                    }
                  </ContainerAlternativas>
                )
              }

            </ContentPergunta>
            
            <ContainerOpcoes>
              <ContainerOpcoesPremios>
                <ContentOpcoesPremio>
                  <ContentImage>
                    <OpcoesPremio src={imagesOptionsErrar}/>
                  </ContentImage>
                  <ContentLabelOpcoesPremio>
                    <LabelOpcoesPremio color={'#fff'} fundo={'#C5142F'}>
                      ERRAR
                    </LabelOpcoesPremio>
                  </ContentLabelOpcoesPremio>
                </ContentOpcoesPremio>
                <ContentOpcoesPremio>
                  <ContentImage>
                    <OpcoesPremio src={imagesOptionsParar}/>
                  </ContentImage>
                  <ContentLabelOpcoesPremio>
                    <LabelOpcoesPremio color={'#000'} fundo={'#D0C60C'}>
                      PARAR
                    </LabelOpcoesPremio>
                  </ContentLabelOpcoesPremio>
                </ContentOpcoesPremio>
                <ContentOpcoesPremio>
                  <ContentImage>
                    <OpcoesPremio src={imagesOptionsAcertar}/>
                  </ContentImage>
                  <ContentLabelOpcoesPremio>
                    <LabelOpcoesPremio color={'#fff'} fundo={'#0D7F35'}>
                      ACERTAR
                    </LabelOpcoesPremio>
                  </ContentLabelOpcoesPremio>
                </ContentOpcoesPremio>
              </ContainerOpcoesPremios>
            </ContainerOpcoes>
          
          </ContainerPergunta>

          <ContainerTimerNovo>
            <ContentTimerNovo>
              <ContentImageC4>
                <OpcoesPremioC4 src={c42}/>
              </ContentImageC4>
              <TimerC4>
                {timer}
              </TimerC4>
            </ContentTimerNovo>
          </ContainerTimerNovo>

      </Container>
  );
}

export default Perguntas;