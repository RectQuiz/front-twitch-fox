import React, { useEffect, useState } from 'react';
import { Footer, Loading } from '../../../components';
import { Perguntas, Premiacoes } from './components';
import { useSelector, useDispatch } from 'react-redux';

import {
  Content,
  BackgroundColor,
  ContainerPartida,
  ContainerPrePartida
} from './styles';
import { loadPremiacoes } from '../../../store/modules/premiacao/actions';
import { loadPerguntas } from '../../../store/modules/pergunta/actions';
import { loadPartidaAtual, cadastrarPartida, atualizarPartida } from '../../../store/modules/partida/actions';

import MusicaDefuse from '../../../assets/sounds/defuse.mp3';
import MusicaInicio from '../../../assets/sounds/aparecer_pergunta.mp3';
import MusicaErrar from '../../../assets/sounds/errou.mp3';
import MusicaAcertar from '../../../assets/sounds/acertou.mp3';
import MusicaTimer from '../../../assets/sounds/timer.mp3';
import { ContainerPremio } from './components/Premiacoes/styles';
import InicioPartida from './components/InicioPartida';
function Partida({history}) {

  const dispatch = useDispatch();
  const [ ajudas, setAjudas ] = useState({
    ajuda1:false,
    ajuda2:false
  });
  const [ musicaDefuse, setMusicaDefuse ] = useState(new Audio(MusicaDefuse));
  const [ musica, setMusica ] = useState(new Audio(MusicaInicio));
  const [ musicaErrar, setMusicaErrar ] = useState(new Audio(MusicaErrar));
  const [ musicaAcertar, setMusicaAcertar ] = useState(new Audio(MusicaAcertar));
  const [ musicaTimer, setMusicaTimer ] = useState(new Audio(MusicaTimer));

  const [ statusRodada, setStatuRodada ] = useState(false);
  const [ statusTimer, setStatusTimer ] = useState(false);
  const { premiacoes, loading:loadingPremiacao, errors:errorsPremiacao, status:statusPremiacao } = useSelector(({ PremiacaoReducer }) => PremiacaoReducer);
  const { perguntas, loading:loadingPergunta, errors:errorsPergunta, status:statusPergunta} = useSelector(({ PerguntaReducer }) => PerguntaReducer);
  const { partida, loading, errors, status, response } = useSelector(({ PartidaReducer }) => PartidaReducer);

  // console.log('partida: ',partida);
  // console.log('loading: ',loading);
  // console.log('status: ',status);

  useEffect(()=>{
      musica.preload = 'auto';
      musicaErrar.preload = 'auto';
      musicaAcertar.preload = 'auto';
      musicaDefuse.preload = 'auto';
      musicaTimer.preload = 'auto';
      dispatch(loadPartidaAtual());
      dispatch(loadPremiacoes());
      dispatch(loadPerguntas());
  },[]);

  useEffect(()=>{
    if ((partida == null || partida.length == 0) && status == 200 && loading == false) {
      dispatch(cadastrarPartida());
      console.log('iniciando uma nova partida');
    }
  },[partida,status,loading]);

  function setAjuda(id) {
    if(statusRodada){
      console.log('id: ',id);
      switch (id) {
        case 1:
          if (partida.ajuda_1 == false) {
            // musicaGranada.play();
            dispatch(atualizarPartida({
              id:partida._id,
              ajuda_1:true
            }));
            console.log('Ajuda 1');
          }
          break;
        case 2:
          if (partida.ajuda_2 == false) {
            // musicaDefuse.play();
            dispatch(atualizarPartida({
              id:partida._id,
              ajuda_2:true
            }));
            console.log('Ajuda 2');
          }
          break;
        case 3:
          if (partida.ajuda_3 == false) {
            musicaDefuse.play();
            dispatch(atualizarPartida({
              id:partida._id,
              ajuda_3:true
            }));
            console.log('Ajuda 3');
          }
            break;
        default:
          break;
      }
    }
  }

  return (
    <Content>
        <BackgroundColor>
          {
            partida?
            (
              partida.ajudas.length == 0?
              (
                <ContainerPrePartida>
                  <InicioPartida partida={partida}/>
                </ContainerPrePartida>
              ):
              (
                <ContainerPartida>
                  <Premiacoes
                    statusRodada={statusRodada}
                    partida={partida}
                    ajudas={ajudas}
                    setAjuda={setAjuda}
                    premiacoes={premiacoes}
                  />
                  <Perguntas
                    statusRodada={statusRodada}
                    setStatuRodada={setStatuRodada}
                    history={history}
                    premiacoes={premiacoes}
                    partida={partida}
                    perguntas={perguntas}
                    statusTimer={statusTimer}
                    setStatusTimer={setStatusTimer}
                    setAjuda={setAjuda}
                  />
                </ContainerPartida>
              )
            ):
            (null)
          }
          {/* <Footer/> */}
          <Loading
            show={ loading || loadingPergunta || loadingPremiacao }
            title={'CARREGANDO NIVEIS'}
          />
        </BackgroundColor>
    </Content>
  );
}

export default Partida;