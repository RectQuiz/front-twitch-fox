import React, { useEffect, useState } from 'react';
import { Footer } from '../../../components';
import { Perguntas, Premiacoes } from './components';
import { useSelector, useDispatch } from 'react-redux';

import {
  Content,
  BackgroundColor,
  ContainerPartida
} from './styles';
import { loadPremiacoes } from '../../../store/modules/premiacao/actions';
import { loadPerguntas } from '../../../store/modules/pergunta/actions';
import { loadPartidaAtual, cadastrarPartida } from '../../../store/modules/partida/actions';

function Partida() {

  const dispatch = useDispatch();
  const [ ajudas, setAjudas ] = useState({
    ajuda1:false,
    ajuda2:false
  });
  const { premiacoes, loading:loadingPremiacao, errors:errorsPremiacao, status:statusPremiacao } = useSelector(({ PremiacaoReducer }) => PremiacaoReducer);
  const { perguntas, loading:loadingPergunta, errors:errorsPergunta, status:statusPergunta} = useSelector(({ PerguntaReducer }) => PerguntaReducer);
  const { partida, loading, errors, status, response } = useSelector(({ PartidaReducer }) => PartidaReducer);

  // console.log('partida: ',partida);
  // console.log('loading: ',loading);
  // console.log('status: ',status);

  useEffect(()=>{
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
    if (id == 1) {
      setAjudas({
        ...ajudas,
        ajuda1:!ajudas.ajuda1
      });
    }else{
      setAjudas({
        ...ajudas,
        ajuda2:!ajudas.ajuda2
      });
    }
  }

  return (
    <Content>
        <BackgroundColor>
          <ContainerPartida>
            <Premiacoes
              partida={partida}
              ajudas={ajudas}
              setAjuda={setAjuda}
              premiacoes={premiacoes}
            />
            <Perguntas
              partida={partida}
              perguntas={perguntas}
            />
          </ContainerPartida>
          {/* <Footer/> */}
        </BackgroundColor>
    </Content>
  );
}

export default Partida;