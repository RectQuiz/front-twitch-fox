import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Products from './components/Products';
import { api } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';

import { Content, BackgroundColor } from './styles';

function Loja() {
  const { status } = useSelector(({ ModalReducer }) => ModalReducer);
  const dispatch = useDispatch();
  const [ products, setProducts ] = useState([]);
  const [ pagination, setPagination ] = useState({
      totalPages:0,
      currentPage:0
  });
  // const [ modalInfoProduct, setModalInfoProduct ] = useState(false);

  const setModalInfoProduct = (status_set)=>{
    if (status_set != status) {
      dispatch(setStatusModal(status_set));
    }
  }

  useEffect(()=>{
      load_products();
  },[]);

  const load_products = async(page)=>{
      try {
          // let resp = await api.get(`https://steamcommunity.com/id/argerioaf/inventory/json/730/2`);
          let resp = await api.get(`http://localhost:3333/products?page=${page}`);
          console.log('resp itens cs: ',resp.data.data);
          setProducts(resp.data.data);
          setPagination({
              currentPage:resp.data.currentPage,
              totalPages:resp.data.totalPages
          });
      } catch (error) {
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
            <Products
               products={products} 
               pagination={pagination}
               load_products={load_products}
               modal={status}
               setModal={setModalInfoProduct}
            />
            <Footer/>
        </BackgroundColor>
    </Content>
  ) ;
}

export default Loja;