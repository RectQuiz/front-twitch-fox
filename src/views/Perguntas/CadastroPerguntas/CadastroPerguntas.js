import React, { useEffect } from 'react';
import { Footer, Loading } from '../../../components';
import { FormCadastro, ListItens } from './components';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadPerguntas,
  cadastrarPergunta,
  deletePergunta,
  atualizarPergunta,
  LoadQuantPerguntas
} from '../../../store/modules/pergunta/actions';

import {
  loadNiveis
} from '../../../store/modules/nivel/actions';

import {
  loadCategorias
} from '../../../store/modules/categoria/actions';

import {
  Content,
  BackgroundColor
} from './styles';


function CadastroPerguntas() {
  const dispatch = useDispatch();
  const { niveis, loading:loadingNivel } = useSelector(({ NivelReducer }) => NivelReducer);
  const { perguntas, loading, quant_perguntas } = useSelector(({ PerguntaReducer }) => PerguntaReducer);
  const { categorias } = useSelector(({ CategoriaReducer }) => CategoriaReducer);

  // console.log('List perguntas: ',perguntas);
  // console.log('loading perguntas: ',loading);
  // console.log('errors perguntas: ',errors);
  // console.log('status perguntas: ',status);
  // console.log('response perguntas: ',response);

  useEffect(()=>{
      dispatch(loadCategorias());
      dispatch(LoadQuantPerguntas());
      dispatch(loadPerguntas());
      dispatch(loadNiveis());
  });

  function registrarPergunta(pergunta) {
    console.log('registrando pergunta');
    dispatch(cadastrarPergunta(pergunta));
  }

  function deletarPergunta(id) {
    dispatch(deletePergunta(id));
  }

  function ChangeStatusPergunta(pergunta) {
    let newPergunta = {
      ativa:!pergunta.ativa,
      id:pergunta._id
    }
    dispatch(atualizarPergunta(newPergunta));
  }
  
  return (
    <Content>
        <BackgroundColor>
            <FormCadastro
              registrarPergunta={registrarPergunta}
              niveis={niveis}
              categorias={categorias}
            />
            <ListItens
              quant_perguntas={quant_perguntas}
              perguntas={perguntas}
              deletarPergunta={deletarPergunta}
              ChangeStatusPergunta={ChangeStatusPergunta}
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