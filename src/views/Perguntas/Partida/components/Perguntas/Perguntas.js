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

function Perguntas({partida,perguntas,premiacoes}) {
  const timerRef = useRef();
  const [ timer, setTimer ] = useState('00:00');
  const [ alternativaSelecionada, setAlternativaSelecionada ] = useState('');
  const [ statusRodada, setStatuRodada ] = useState(false);
  const [ statusTimer, setStatusTimer ] = useState(false);
  const [ pergunta, setPergunta ] = useState({});
  const [ imagesOptionsErrar, setImagesOptionsErrar ] = useState(Vazio);
  const [ imagesOptionsParar, setImagesOptionsParar ] = useState(Vazio);
  const [ imagesOptionsAcertar, setImagesOptionsAcertar ] = useState(Vazio);
  const [ musica, setMusica ] = useState(new Audio(MusicaInicio));


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

  function startTimer(duration) {
    EscolherPergunta();
    musica.play();
    setStatuRodada(true);
    var timer = duration, minutes, seconds;
    if (statusTimer == false) {
      setStatusTimer(true);
      let ref = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          let time = minutes + ":" + seconds;
  
          setTimer(time);
  
          if (--timer < 0) {
              // timer = duration;
              clearInterval(ref);
              setStatusTimer(false);
          }
      }, 1000);
    }
  }

  function selecionarAlternativa(alternativa) {
    setAlternativaSelecionada(alternativa);
  }

  function verificarResposta() {
    if (statusRodada) {
      if (alternativaSelecionada.number == pergunta.resposta) {
        console.log('aacertou');
      }else{
        console.log('errou');
      }
    }
  }

  // console.log('perguntas: ',perguntas);
  function EscolherPergunta() {
    let perguntasDoNivel = perguntas.filter((pergunta)=>{
      return pergunta.nivel.number == partida.nivel.number;
    });
    if (perguntasDoNivel.length > 0) {
      let IndexperguntaAtual = Math.random() * (perguntasDoNivel.length - 0) + 0;
      let perguntaAtual = perguntasDoNivel[parseInt(IndexperguntaAtual)];
      setPergunta(perguntaAtual);
      console.log('perguntaAtual: ',perguntaAtual);
    }
    console.log('perguntasDoNivel: ',perguntasDoNivel);
  }
  
  function EscolherOpcoesPremiosErrar() {
      //Errar
      let if_errar = premiacoes.filter((premiacao)=>{
        return premiacao.indice == partida.quant_acertos-1;
      });
      console.log('if_errar: ',if_errar);
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
      console.log('if_parar: ',if_parar);
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
      console.log('if_acertar: ',if_acertar);
      setImagesOptionsAcertar('http://localhost:3333/'+if_acertar[0].image);
    }else{
      setImagesOptionsAcertar(Vazio);
    }

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
                          <TextoAlternativa status={statusRodada}>
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
                  <ButtonOpcao color={'#C5142F'}>
                      ENCERRAR
                  </ButtonOpcao>
                </ContentOpcao>
                <ContentOpcao>
                  <ButtonOpcao color={'#A59D0E'} onClick={()=>startTimer(10)}>
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