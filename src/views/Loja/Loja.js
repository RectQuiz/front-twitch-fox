import React, { useEffect, useState } from 'react';
import { Products, InfoPoints, FiltrosLoja } from './components';
import { api } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { loadInfoUser } from '../../store/modules/user/actions';
import ScaleLoader from "react-spinners/ScaleLoader";

import { Content, BackgroundColor } from './styles';
import { loadProducts } from '../../store/modules/products/actions';
import { AlertMessageSimple, Footer } from '../../components';
import { setAlert } from '../../store/modules/alerts/actions';
import { Helmet } from 'react-helmet';

function Loja() {
  const { status } = useSelector(({ ModalReducer }) => ModalReducer);
  const [ filterSelect, setFilterSelect ] = useState({_id:''});
  const [ filterGeralSelect, setFilterGeralSelect ] = useState({nome:'filtroPrice',value:'up'});
  const [ filtrosGerais, setFiltrosGerais ] = useState([
    {
      nome:"Preço",
      value:"filtroPrice",
      options:[
        {
          nome:"Maior",
          value:'up'
        },
        {
          nome:"Menor",
          value:'down'
        }
      ]
    }
  ]);
  const { user } = useSelector(({ UserReducer }) => UserReducer);
  const { regra_filtros, filtros_type, products, totalPages, currentPage, loading } = useSelector(({ ProductsReducer }) => ProductsReducer);
  const dispatch = useDispatch();
  // const [ modalInfoProduct, setModalInfoProduct ] = useState(false);
  const token = localStorage.getItem('@siteJokerz/token');
  //   console.log('token: ',token);

  const setModalInfoProduct = (status_set)=>{
    if (status_set != status) {
      dispatch(setStatusModal(status_set));
    }
  }

  useEffect(()=>{
    const token = localStorage.getItem('@siteJokerz/token');
    console.log("token Home: ",token);
    if (token) {
        console.log('loadInfoUser Home');
        dispatch(loadInfoUser());
    }
      load_products(currentPage);
  },[]);
  
  const load_products = (page , filtro = filterSelect, filtroPrice = filterGeralSelect)=>{
    console.log("filterSelect: ",filtro);
    console.log("filtroPrice: ",filtroPrice);
    if (filtro._id == '') {
      dispatch(loadProducts({page:page, status:"emEstoque", [filtroPrice.nome]:filtroPrice.value}));
    } else {
      dispatch(loadProducts({page:page, status:"emEstoque",filtroType: filtro._id, [filtroPrice.nome]:filtroPrice.value}));
    }
  };

  function filtrarType(filtro) {
    load_products(currentPage,filtro);
  }
  
  function filtrarGeral(filtro) {
    load_products(currentPage,filterSelect,filtro);
  }

  return(
    <Content modal={status}>
         <Helmet>
          <title>Loja jokerz</title>
        </Helmet>
        <BackgroundColor>
            {
              <>
                <InfoPoints
                  user={user}
                  loading={loading}
                />
                <FiltrosLoja
                  filtrarGeral={filtrarGeral}
                  filtrosGerais={filtrosGerais}
                  user={user}
                  loading={loading}
                  filtros_type={filtros_type}
                  filtrarType={filtrarType}
                  load_products={load_products}
                  filterSelect={filterSelect}
                  setFilterSelect={setFilterSelect}
                  regra_filtros={regra_filtros}
                  setFilterGeralSelect={setFilterGeralSelect}
                  filterGeralSelect={filterGeralSelect}
                />
                {
                  products?
                  (
                      <Products
                        filtros_type={filtros_type}
                        user={user}
                        products={products}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        load_products={load_products}
                        modal={status}
                        setModal={setModalInfoProduct}
                        loading={loading}
                        filtrarType={filtrarType}
                      />
                  ):
                  (
                      <ScaleLoader
                          // css={override}
                          color="#DC143C"
                          height={60}
                          width={7}
                          margin={7}
                          loading={true}
                      />
                  )
                }
              </>
            }
            <Footer/>
        </BackgroundColor>
    </Content>
  ) ;
}

export default Loja;