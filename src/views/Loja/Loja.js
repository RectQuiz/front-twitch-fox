import React, { useEffect } from 'react';
import Products from './components/Products';
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

function Loja() {
  const { status } = useSelector(({ ModalReducer }) => ModalReducer);
  const { user } = useSelector(({ UserReducer }) => UserReducer);
  const { products, totalPages, currentPage, loading } = useSelector(({ ProductsReducer }) => ProductsReducer);
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
      if (token) {
        dispatch(loadInfoUser());
      }
      load_products(1);
  },[]);
  
  const load_products = async(page)=>{
    dispatch(loadProducts({page:page, status:"emEstoque"}));
  };

  return(
    <Content modal={status}>
        <BackgroundColor>
            {
                products?
                (
                    <Products
                       user={user}
                       products={products}
                       totalPages={totalPages}
                       currentPage={currentPage}
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