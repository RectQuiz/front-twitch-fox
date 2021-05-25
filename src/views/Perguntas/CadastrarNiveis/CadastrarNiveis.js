import React, { useEffect } from 'react';
import { Footer, Loading } from '../../../components';
import { FormCadastro, ListItens } from './components';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadNiveis,
  cadastrarNivel,
  deleteNivel
} from '../../../store/modules/nivel/actions';

import {
  Content,
  BackgroundColor
} from './styles';

function CadastrarNiveis() {
  const dispatch = useDispatch();
  const { niveis, loading } = useSelector(({ NivelReducer }) => NivelReducer);

  // console.log('List niveis: ',niveis);
  // console.log('loading niveis: ',loading);
  // console.log('errors niveis: ',errors);
  // console.log('status niveis: ',status);
  // console.log('response niveis: ',response);

  useEffect(()=>{
      dispatch(loadNiveis());
  });

  function registrarNivel(nivel) {
    console.log('deletando nivel');
    dispatch(cadastrarNivel(nivel));
  }

  function deletarNivel(id) {
    dispatch(deleteNivel(id));
  }

  return (
    <Content>
        <BackgroundColor>
            <FormCadastro
              registrarNivel={registrarNivel}
            />
            <ListItens
              niveis={niveis}
              deletarNivel={deletarNivel}
            />
            <Loading
              show={loading}
              title={'CARREGANDO NIVEIS'}
            />
          <Footer/>
        </BackgroundColor>
    </Content>
  );
}

export default CadastrarNiveis;