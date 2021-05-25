import React, { useEffect } from 'react';
import { Footer, Loading } from '../../../components';
import { FormCadastro, ListItens } from './components';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadPremiacoes,
  cadastrarPremiacao,
  deletePremiacao
} from '../../../store/modules/premiacao/actions';

import {
  loadNiveis
} from '../../../store/modules/nivel/actions';

import {
  Content,
  BackgroundColor
} from './styles';


function CadastroPremiacao() {
    const dispatch = useDispatch();
    const { niveis, loading:loadingNivel } = useSelector(({ NivelReducer }) => NivelReducer);
    const { premiacoes, loading } = useSelector(({ PremiacaoReducer }) => PremiacaoReducer);

    // console.log('List premiacoes: ',premiacoes);
    // console.log('loading premiacoes: ',loading);
    // console.log('errors premiacoes: ',errors);
    // console.log('status premiacoes: ',status);
    // console.log('response premiacoes: ',response);

    useEffect(()=>{
        dispatch(loadPremiacoes());
        dispatch(loadNiveis());
    },[]);

    function registrarPremiacao(premiacao) {
      const data = new FormData();
      // console.log(premiacao);
      data.append('image_premio',premiacao.image_premio);
      data.append('titulo',premiacao.titulo);
      data.append('nivel',premiacao.nivel);
      data.append('valor',premiacao.valor);
      data.append('indice',premiacao.indice);
      console.log(data);
      dispatch(cadastrarPremiacao(data));
    }

    function deletarPremiacao(id) {
      console.log('deletando premiacao');
      dispatch(deletePremiacao(id));
    }

    return (
      <Content>
        <BackgroundColor>
            <FormCadastro
              registrarPremiacao={registrarPremiacao}
              niveis={niveis}
            />
            <ListItens
              premiacoes={premiacoes}
              deletarPremiacao={deletarPremiacao}
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

export default CadastroPremiacao;