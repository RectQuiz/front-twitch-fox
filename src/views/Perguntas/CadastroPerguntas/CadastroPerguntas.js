import React, { useEffect } from 'react';
import { Footer, Loading } from '../../../components';
import { FormCadastro, ListItens } from './components';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadPerguntas,
  cadastrarPergunta,
  deletePergunta
} from '../../../store/modules/pergunta/actions';

import {
  loadNiveis
} from '../../../store/modules/nivel/actions';

import {
  Content,
  BackgroundColor
} from './styles';


function CadastroPerguntas() {
  const dispatch = useDispatch();
  const { niveis, loading:loadingNivel, errors:errorsNivel, status:statusNivel, response:responseNivel } = useSelector(({ NivelReducer }) => NivelReducer);
  const { perguntas, loading, errors, status, response } = useSelector(({ PerguntaReducer }) => PerguntaReducer);

  // console.log('List perguntas: ',perguntas);
  // console.log('loading perguntas: ',loading);
  // console.log('errors perguntas: ',errors);
  // console.log('status perguntas: ',status);
  // console.log('response perguntas: ',response);

  useEffect(()=>{
      dispatch(loadPerguntas());
      dispatch(loadNiveis());
  },[]);

  function registrarPergunta(pergunta) {
    console.log('deletando pergunta');
    dispatch(cadastrarPergunta(pergunta));
  }

  function deletarPergunta(id) {
    dispatch(deletePergunta(id));
  }
  
  return (
    <Content>
        <BackgroundColor>
            <FormCadastro
              registrarPergunta={registrarPergunta}
              niveis={niveis}
            />
            <ListItens
              perguntas={perguntas}
              deletarPergunta={deletarPergunta}
            />
            <Loading
              show={(loading && loadingNivel) || (!loading && loadingNivel) || (loading && !loadingNivel) }
              title={'CARREGANDO NIVEIS'}
            />
          <Footer/>
        </BackgroundColor>
    </Content>
  );
}

export default CadastroPerguntas;