import React, { useEffect, useState, useRef } from 'react';
import { Content } from '../Premiacoes/styles';

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
    ContainerOpcoesJogo,
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
    ContentTimerNovo
} from './styles';
import Vazio from '../../../../../assets/images/vazio.png';
import MusicaInicio from '../../../../../assets/sounds/aparecer_pergunta.mp3';
import MusicaErrar from '../../../../../assets/sounds/errou.mp3';
import MusicaAcertar from '../../../../../assets/sounds/acertou.mp3';
import MusicaTimer from '../../../../../assets/sounds/timer.mp3';
// import MusicaC4 from '../../../../../assets/sounds/c4.mp3';
import { useDispatch } from 'react-redux';
import { atualizarPartida } from '../../../../../store/modules/partida/actions';
import { atualizarPergunta } from '../../../../../store/modules/pergunta/actions';

function Perguntas({
  partida,
  perguntas,
  premiacoes,
  history,
  statusRodada,
  setStatuRodada,
  statusTimer,
  setStatusTimer
}) {
  const dispatch = useDispatch();
  const timerRef = useRef();
  const [ timer, setTimer ] = useState('00:00');
  const [ alternativaSelecionada, setAlternativaSelecionada ] = useState({});
  const [ pergunta, setPergunta ] = useState(null);
  const [ imagesOptionsErrar, setImagesOptionsErrar ] = useState(Vazio);
  const [ imagesOptionsParar, setImagesOptionsParar ] = useState(Vazio);
  const [ ref, setRef ] = useState();
  const [ alternativasTiradas, setAlternativasTiradas ] = useState([]);
  const [ imagesOptionsAcertar, setImagesOptionsAcertar ] = useState(Vazio);
  const [ musica, setMusica ] = useState(new Audio(MusicaInicio));
  const [ musicaErrar, setMusicaErrar ] = useState(new Audio(MusicaErrar));
  const [ musicaAcertar, setMusicaAcertar ] = useState(new Audio(MusicaAcertar));
  const [ musicaTimer, setMusicaTimer ] = useState(new Audio(MusicaTimer));
  const [ showPergunta, setShowPergunta ] = useState(0); 
  const [ statusResultado, setStatusResultado ] = useState(false);
  const [ statusResposta, setStatusResposta ] = useState(false);

  // const [ musicaC4, setMusicaC4 ] = useState(new Audio(MusicaC4));


  useEffect(()=>{
    musica.preload = 'auto';
    musicaErrar.preload = 'auto';
    musicaAcertar.preload = 'auto';
    musicaTimer.preload = 'auto';
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
    if (statusRodada && (pergunta&&partida) && partida.ajuda_1 == true && statusTimer == true) {
      console.log('Ajuda 1 usada: ',partida);
      // musicaC4.play();
      let alternativa1 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
      let alternativa2 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
      while(alternativa2 == alternativa1 || (pergunta.alternativas[alternativa1].number == pergunta.resposta || pergunta.alternativas[alternativa2].number == pergunta.resposta)){ 
        alternativa2 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
        alternativa1 = parseInt(Math.random() * (pergunta.alternativas.length - 0) + 0);
        console.log('entrou: ');
      }
      console.log('pergunta.alternativas[alternativa1].number: ',pergunta.alternativas[alternativa1].number);
      console.log('pergunta.alternativas[alternativa2].number: ',pergunta.alternativas[alternativa2].number);
      console.log('alternativa1: ',alternativa1);
      console.log('alternativa2: ',alternativa2);
      console.log('pergunta.resposta: ',pergunta.resposta);
      addTime(4);
      setAlternativasTiradas({
        alternativa1:alternativa1,
        alternativa2:alternativa2
      });
    }else{
      console.log('n foi 1');
      console.log('statusRodada: ',statusRodada);
      console.log('pergunta: ',pergunta);
      console.log('partida: ',partida);
    }

  },[partida&&partida.ajuda_1]);
  
  useEffect(()=>{

    if (statusRodada && (pergunta&&partida) && partida.ajuda_2 == true && statusTimer == true) {
      console.log('Ajuda 2 usada: ',partida);
      addTime(8);
    }else{
      console.log('n foi 2');
    }

  },[partida&&partida.ajuda_2]);
  
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
    setAlternativaSelecionada(alternativa);
  }
  
  function verificarResposta() {
    if (statusRodada) {
      if (alternativaSelecionada.number == pergunta.resposta) {
        musicaAcertar.play();
        setTimeout(() => {
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
  
          setStatuRodada(false);
          clearInterval(ref);
          setStatusTimer(false);
          setTimer('00:00');
        }, 1000);
      }else{
        musicaErrar.play();
        setTimeout(() => {
          console.log('errou');
          setShowPergunta(0);
          setStatusResultado(true);
          setStatusResposta(false);
          setAlternativasTiradas({});
          setStatuRodada(false);
          clearInterval(ref);
          setStatusTimer(false);
          setAlternativaSelecionada({});
          setTimer('00:00');
        }, 1000);
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
    let perguntasDoNivel = perguntas.filter((pergunta)=>{
      return pergunta.nivel.number == partida.nivel.number && pergunta.ativa == true;
    });
    console.log('perguntasDoNivel: ',perguntasDoNivel);
    if (statusRodada == true && showPergunta < 5) {
      setShowPergunta(showPergunta+1);
    }else{
      if (perguntasDoNivel.length > 0 && partida.quant_acertos < 15 && showPergunta == 0) {
        musica.play();
        setTimeout(() => {
          setShowPergunta(1);
          let IndexperguntaAtual = Math.random() * (perguntasDoNivel.length - 0) + 0;
          let perguntaAtual = perguntasDoNivel[parseInt(IndexperguntaAtual)];
          setPergunta(perguntaAtual);
          setStatuRodada(true);
          //********************************************************** */
          //**********************************************************
          //***  COMENTAR A LINHA A BAIXO QUANDO FOR FAZER TESTES  ***
          //**********************************************************
          //********************************************************** */
          // dispatch(atualizarPergunta({id:perguntaAtual._id,ativa:false}));
    
          console.log('perguntaAtual: ',perguntaAtual);
        }, 1000);
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
        setImagesOptionsErrar('http://localhost:3333/'+if_errar[0].image);
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
        setImagesOptionsParar('http://localhost:3333/'+if_parar[0].image);
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
      setImagesOptionsAcertar('http://localhost:3333/'+if_acertar[0].image);
    }else{
      setImagesOptionsAcertar(Vazio);
    }

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

  return (
      <Container>
          <ContainerPergunta>

            {
              !statusResultado&&
              (
                <HeaderPergunta>
                  <ContainerTimer onClick={()=>EscolherPergunta()}>
                    <Timer status={showPergunta >= 1}>
                      PERGUNTA {partida?(partida.quant_acertos == 0?1:partida.quant_acertos < 15?partida.quant_acertos + 1:'PARTIDA FINALIZADA'):0}
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
                        {statusResposta?'A C4 FOI DESARMADA!':'A C4 EXPLODIU!'}
                      </TituloResultado>
                      <ContainerOpcoesPremios2>
                            {
                              statusResposta?
                              (
                                <ContentOpcoesPremio>
                                  <ContentImage>
                                    <OpcoesPremio src={imagesOptionsParar}/>
                                  </ContentImage>
                                  <ContentLabelOpcoesPremio>
                                    <LabelOpcoesPremio color={'#0D7F35'} fundo={'#0D7F35'}>
                                      GANHOU
                                    </LabelOpcoesPremio>
                                  </ContentLabelOpcoesPremio>
                                </ContentOpcoesPremio>
                              ):
                              (
                                <ContentOpcoesPremio>
                                  <ContentImage>
                                    <OpcoesPremio src={imagesOptionsErrar}/>
                                  </ContentImage>
                                  {
                                    imagesOptionsErrar != Vazio?
                                    (
                                      <ContentLabelOpcoesPremio>
                                        <LabelOpcoesPremio color={'#0D7F35'} fundo={'#0D7F35'}>
                                          GANHOU
                                        </LabelOpcoesPremio>
                                      </ContentLabelOpcoesPremio>
                                    ):
                                    (
                                      <ContentLabelOpcoesPremio>
                                        <LabelOpcoesPremio color={'#C5142F'} fundo={'#C5142F'}>
                                          PERDEU
                                        </LabelOpcoesPremio>
                                      </ContentLabelOpcoesPremio>
                                    )
                                  }
                                </ContentOpcoesPremio>
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
                              <ContentAlternativa onClick={()=>selecionarAlternativa(alternativa)} statusSelect={alternativaSelecionada._id == alternativa._id} key={alternativa._id}>
                                <TextoAlternativa status={
                                  statusRodada && 
                                  !(alternativasTiradas.alternativa1 == index || alternativasTiradas.alternativa2 == index) &&
                                  showPergunta >= index+2
                                  }>
                                  <LetraAlternativa>
                                    {index == 0?'A':index == 1?'B':index == 2?'C':index == 3?'D':''})
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
              {
                statusResultado?
                (
                  statusResposta?
                  (
                    <ContainerOpcoesJogo>
                      <ContentOpcao>
                        <ButtonOpcao onClick={()=>setStatusResultado(false)} color={'#0D7F35'}>
                            CONTINUAR
                        </ButtonOpcao>
                      </ContentOpcao>
                    </ContainerOpcoesJogo>
                  ):
                  (
                    <ContainerOpcoesJogo>
                      <ContentOpcao>
                        <ButtonOpcao onClick={()=>encerraPartida()} color={'#C5142F'}>
                            ENCERRAR
                        </ButtonOpcao>
                      </ContentOpcao>
                    </ContainerOpcoesJogo>
                  )
                ):
                (
                  <ContainerOpcoesJogo>
                    <ContentOpcao>
                      <ButtonOpcao onClick={encerraPartida} color={'#C5142F'}>
                          ENCERRAR
                      </ButtonOpcao>
                    </ContentOpcao>
                    <ContentOpcao>
                      <ButtonOpcao color={'#A59D0E'} onClick={()=>startTimer(partida.tempo)}>
                          TEMPO
                      </ButtonOpcao>
                    </ContentOpcao>
                    <ContentOpcao>
                      <ButtonOpcao onClick={verificarResposta} color={'#0D7F35'}>
                          VERIFICAR
                      </ButtonOpcao>
                    </ContentOpcao>
                  </ContainerOpcoesJogo>
                )
              }

              <ContainerOpcoesPremios>
                <ContentOpcoesPremio>
                  <ContentImage>
                    <OpcoesPremio src={imagesOptionsErrar}/>
                  </ContentImage>
                  <ContentLabelOpcoesPremio>
                    <LabelOpcoesPremio color={'#C5142F'} fundo={'#C5142F'}>
                      ERRAR
                    </LabelOpcoesPremio>
                  </ContentLabelOpcoesPremio>
                </ContentOpcoesPremio>
                <ContentOpcoesPremio>
                  <ContentImage>
                    <OpcoesPremio src={imagesOptionsParar}/>
                  </ContentImage>
                  <ContentLabelOpcoesPremio>
                    <LabelOpcoesPremio color={'#A59D0E'} fundo={'#D0C60C'}>
                      PARAR
                    </LabelOpcoesPremio>
                  </ContentLabelOpcoesPremio>
                </ContentOpcoesPremio>
                <ContentOpcoesPremio>
                  <ContentImage>
                    <OpcoesPremio src={imagesOptionsAcertar}/>
                  </ContentImage>
                  <ContentLabelOpcoesPremio>
                    <LabelOpcoesPremio color={'#0D7F35'} fundo={'#0D7F35'}>
                      ACERTAR
                    </LabelOpcoesPremio>
                  </ContentLabelOpcoesPremio>
                </ContentOpcoesPremio>
            </ContainerOpcoesPremios>
          </ContainerOpcoes>
          </ContainerPergunta>
          <ContainerTimerNovo>
            <ContentTimerNovo>
              <Timer>
                {timer}
              </Timer>
            </ContentTimerNovo>
          </ContainerTimerNovo>
      </Container>
  );
}

export default Perguntas;