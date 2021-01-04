import React, { useEffect } from 'react';
import { Footer, Loading } from '../../../components';
import { FormCadastro, ListItens } from './components';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadCategorias,
  cadastrarCategoria,
  deleteCategoria
} from '../../../store/modules/categoria/actions';

import {
  Content,
  BackgroundColor
} from './styles';

function CadastroCategorias() {
  const dispatch = useDispatch();
  const { categorias , loading, errors, status, response } = useSelector(({ CategoriaReducer }) => CategoriaReducer);

  // console.log('List categorias: ',categorias);
  // console.log('loading categorias: ',loading);
  // console.log('errors categorias: ',errors);
  // console.log('status categorias: ',status);
  // console.log('response categorias: ',response);

  useEffect(()=>{
      dispatch(loadCategorias());
  },[]);

  function registrarCategoria(categoria) {
    console.log('deletando categorias');
    dispatch(cadastrarCategoria(categoria));
  }

  function deletarCategoria(id) {
    dispatch(deleteCategoria(id));
  }

  return (
    <Content>
        <BackgroundColor>
            <FormCadastro
              registrarCategoria={registrarCategoria}
            />
            <ListItens
              categorias={categorias}
              deletarCategoria={deletarCategoria}
            />
            <Loading
              show={loading}
              title={'CARREGANDO Categorias'}
            />
          <Footer/>
        </BackgroundColor>
    </Content>
  );
}

export default CadastroCategorias;