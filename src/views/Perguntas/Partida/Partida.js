import React, { useEffect, useState } from 'react';
import { Footer, Loading } from '../../../components';
import { Perguntas, Premiacoes } from './components';
import { useSelector, useDispatch } from 'react-redux';

import {
  Content,
  BackgroundColor,
  ContainerPartida
} from './styles';
import { loadPremiacoes } from '../../../store/modules/premiacao/actions';
import { loadPerguntas } from '../../../store/modules/pergunta/actions';
import { loadPartidaAtual, cadastrarPartida, atualizarPartida } from '../../../store/modules/partida/actions';

import MusicaGranada from '../../../assets/sounds/granada.mp3';
import MusicaDefuse from '../../../assets/sounds/defuse.mp3';
import MusicaInicio from '../../../assets/sounds/aparecer_pergunta.mp3';
import MusicaErrar from '../../../assets/sounds/errou.mp3';
import MusicaAcertar from '../../../assets/sounds/acertou.mp3';
import MusicaTimer from '../../../assets/sounds/timer.mp3';
function Partida({history}) {

  const dispatch = useDispatch();
  const [ ajudas, setAjudas ] = useState({
    ajuda1:false,
    ajuda2:false
  });
  const [ musicaGranada, setMusicaGranada ] = useState(new Audio(MusicaGranada));
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
      musicaGranada.preload = 'auto';
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
      if (id == 1 && partida.ajuda_1 == false) {
        musicaGranada.play();
        setTimeout(() => {
          dispatch(atualizarPartida({
            id:partida._id,
            ajuda_1:true
          }));
        }, 1000);
      }
      if (id == 2 && partida.ajuda_2 == false) {
        musicaDefuse.play();
        setTimeout(() => {
          dispatch(atualizarPartida({
            id:partida._id,
            ajuda_2:true
          }));
        }, 1000);
      }
    }
  }

  return (
    <Content>
        <BackgroundColor>
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
            />
          </ContainerPartida>
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