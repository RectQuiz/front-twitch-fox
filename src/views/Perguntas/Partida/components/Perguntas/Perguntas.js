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
    ContentOpcoesPremio,
    OpcoesPremio,
    ContentLabelOpcoesPremio,
    LabelOpcoesPremio,
    ContentImage
} from './styles';
import Vazio from '../../../../../assets/images/vazio.png';
import MusicaInicio from '../../../../../assets/sounds/Aparecer_pergunta.wav';
import MusicaC4 from '../../../../../assets/sounds/c4.mp3';
import { useDispatch } from 'react-redux';
import { atualizarPartida } from '../../../../../store/modules/partida/actions';

function Perguntas({partida,perguntas,premiacoes,history,statusRodada,setStatuRodada}) {
  const dispatch = useDispatch();
  const timerRef = useRef();
  const [ timer, setTimer ] = useState('00:00');
  const [ alternativaSelecionada, setAlternativaSelecionada ] = useState({});
  const [ statusTimer, setStatusTimer ] = useState(false);
  const [ pergunta, setPergunta ] = useState(null);
  const [ imagesOptionsErrar, setImagesOptionsErrar ] = useState(Vazio);
  const [ imagesOptionsParar, setImagesOptionsParar ] = useState(Vazio);
  const [ ref, setRef ] = useState();
  const [ alternativasTiradas, setAlternativasTiradas ] = useState([]);
  const [ imagesOptionsAcertar, setImagesOptionsAcertar ] = useState(Vazio);
  const [ musica, setMusica ] = useState(new Audio(MusicaInicio));
  const [ musicaC4, setMusicaC4 ] = useState(new Audio(MusicaC4));


  useEffect(()=>{
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
    if (statusRodada && (pergunta&&partida) && partida.ajuda_1 == false) {
      console.log('Ajuda 1 usada: ',partida);
      musicaC4.play();
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
      setAlternativasTiradas({
        alternativa1:alternativa1,
        alternativa2:alternativa2
      });
    }else{
      console.log('n foi 1');
    }

    if (statusRodada && (pergunta&&partida) && partida.ajuda_2 == true) {
      console.log('Ajuda 1 usada: ',partida);
    }else{
      console.log('n foi 1');
    }

  },[partida]);
  
  function startTimer(duration) {
    var timer = duration, minutes, seconds;
    if (statusTimer == false) {
      EscolherPergunta();
      musica.play();
      setStatuRodada(true);
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
        console.log('acertou');
        let partidaChange = {
          quant_acertos: partida.quant_acertos+1,
          id:partida._id,
          ajuda_1:false,
          ajuda_2:false
        }
        setAlternativasTiradas({});
        dispatch(atualizarPartida(partidaChange));
        setStatuRodada(false);
        clearInterval(ref);
        setStatusTimer(false);
        setAlternativaSelecionada({});
        setTimer('00:00');
      }else{
        console.log('errou');
      }
    }
  }

  function EscolherPergunta() {
    let perguntasDoNivel = perguntas.filter((pergunta)=>{
      return pergunta.nivel.number == partida.nivel.number;
    });
    if (perguntasDoNivel.length > 0) {
      let IndexperguntaAtual = Math.random() * (perguntasDoNivel.length - 0) + 0;
      let perguntaAtual = perguntasDoNivel[parseInt(IndexperguntaAtual)];
      setPergunta(perguntaAtual);
      // console.log('perguntaAtual: ',perguntaAtual);
    }
    // console.log('perguntasDoNivel: ',perguntasDoNivel);
  }
  
  function EscolherOpcoesPremiosErrar() {
      //Errar
      let if_errar = premiacoes.filter((premiacao)=>{
        return premiacao.indice == partida.quant_acertos-1;
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

            <HeaderPergunta>
              <ContainerTimer>
                <Timer>
                  PERGUNTA {partida?(partida.quant_acertos == 0?1:partida.quant_acertos + 1):0}
                </Timer>
              </ContainerTimer>
              <ContainerTimer>
                <Timer>
                  {timer}
                </Timer>
              </ContainerTimer>
            </HeaderPergunta>
            
            <ContentPergunta>

              <ContainerTitulo>
                <TituloPergunta status={statusRodada}>
                    {statusRodada?pergunta.titulo:'Partida Ainda não iniciada'}
                </TituloPergunta>
              </ContainerTitulo>

              <ContainerAlternativas>
                {
                  statusRodada && (pergunta && pergunta.alternativas.length) > 0?
                    pergunta.alternativas.map((alternativa,index)=>{
                        return (
                          <ContentAlternativa onClick={()=>selecionarAlternativa(alternativa)} statusSelect={alternativaSelecionada._id == alternativa._id} key={alternativa._id}>
                            <TextoAlternativa status={statusRodada && !(alternativasTiradas.alternativa1 == index || alternativasTiradas.alternativa2 == index)}>
                              <LetraAlternativa>
                                {index +1})
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

            </ContentPergunta>

            <ContainerOpcoes>
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
          
      </Container>
  );
}

export default Perguntas;