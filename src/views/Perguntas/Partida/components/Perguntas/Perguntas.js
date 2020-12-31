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
    TextoAlternativa,
    Timer,

    ContainerOpcoes,
    ContentOpcao,
    ButtonOpcao
} from './styles';

function Perguntas({partida,perguntas}) {
  const timerRef = useRef();
  const [ timer, setTimer ] = useState('00:00');

  function startTimer(duration) {
    var timer = duration, minutes, seconds;
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
        }
    }, 1000);
  }

  function EscolherPergunta(params) {
    
  }

  return (
      <Container>
          <ContainerPergunta>
            <ContainerTimer>
              <Timer>
                {timer}
              </Timer>
            </ContainerTimer>
            <ContentPergunta>
              <ContainerTitulo>
                <TituloPergunta>
                    Qual o ano?
                </TituloPergunta>
              </ContainerTitulo>
              <ContainerAlternativas>
                <ContentAlternativa>
                  <TextoAlternativa>
                      Alternativa 1
                  </TextoAlternativa>
                </ContentAlternativa>
                <ContentAlternativa>
                  <TextoAlternativa>
                      Alternativa 2
                  </TextoAlternativa>
                </ContentAlternativa>
                <ContentAlternativa>
                  <TextoAlternativa>
                      Alternativa 3
                  </TextoAlternativa>
                </ContentAlternativa>
                <ContentAlternativa>
                  <TextoAlternativa>
                      Alternativa 4
                  </TextoAlternativa>
                </ContentAlternativa>
              </ContainerAlternativas>
            </ContentPergunta>
            <ContainerOpcoes>
              <ContentOpcao>
                <ButtonOpcao>
                    ENCERRAR
                </ButtonOpcao>
              </ContentOpcao>
              <ContentOpcao>
                <ButtonOpcao onClick={()=>startTimer(60*1)}>
                    TEMPO
                </ButtonOpcao>
              </ContentOpcao>
              <ContentOpcao>
                <ButtonOpcao>
                    VERIFICAR
                </ButtonOpcao>
              </ContentOpcao>
            </ContainerOpcoes>
          </ContainerPergunta>
      </Container>
  );
}

export default Perguntas;