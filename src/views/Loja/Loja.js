import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Products from './components/Products';
import { api } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { loadInfoUser } from '../../store/modules/user/actions';
import ScaleLoader from "react-spinners/ScaleLoader";

import { Content, BackgroundColor } from './styles';
import Cookies from 'universal-cookie';

function Loja() {
  const { status } = useSelector(({ ModalReducer }) => ModalReducer);
  const { user } = useSelector(({ UserReducer }) => UserReducer);
  const dispatch = useDispatch();
  const [ products, setProducts ] = useState(null);
  const [ pagination, setPagination ] = useState({
      totalPages:0,
      currentPage:0
  });
  // const [ modalInfoProduct, setModalInfoProduct ] = useState(false);

  const cookies = new Cookies();
  // Cookies.set('teste', 'value');

  const setModalInfoProduct = (status_set)=>{
    if (status_set != status) {
      dispatch(setStatusModal(status_set));
    }
  }

  useEffect(()=>{
      dispatch(loadInfoUser());
      load_products();
  },[]);

  const load_products = async(page)=>{
      try {
          // let resp = await api.get(`https://steamcommunity.com/id/argerioaf/inventory/json/730/2`);
          let resp = await api.get(`http://localhost:3333/products?page=${page}`);
          console.log('resp itens cs: ',resp.data.data);
          setPagination({
              currentPage:resp.data.currentPage,
              totalPages:resp.data.totalPages
          });
          setProducts(resp.data.data);
      } catch (error) {
            setProducts([]);
          console.log('error itens cs: ',error);
          if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log('data',error.response.data);
              console.log('status',error.response.status);
              console.log('headers',error.response.headers);
          } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log('request',error.request);
          } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error itens cs', error.message);
          }
          console.log('error.config',error.config);
      }
  }

  return(
    <Content modal={status}>
        <BackgroundColor>
            {
                products?
                (
                    <Products
                       user={user}
                       products={products} 
                       pagination={pagination}
                       load_products={load_products}
                       modal={status}
                       setModal={setModalInfoProduct}
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
            <Footer/>
        </BackgroundColor>
    </Content>
  ) ;
}

export default Loja;