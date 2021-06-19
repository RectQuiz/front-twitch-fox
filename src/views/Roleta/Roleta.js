import React, { useEffect } from 'react';
import { api } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { loadInfoUser } from '../../store/modules/user/actions';
import ScaleLoader from "react-spinners/ScaleLoader";

import { 
  Content,
  BackgroundColor,
  ContentInfoPoints,
  PointsLabel,
  PointsValue
} from './styles';
import { loadProducts } from '../../store/modules/products/actions';
import { Footer } from '../../components';
import { RoletaComp } from './components';
import { GiPopcorn } from 'react-icons/gi';

function Roleta() {
  const { status } = useSelector(({ ModalReducer }) => ModalReducer);
  const { user, loading } = useSelector(({ UserReducer }) => UserReducer);
  const dispatch = useDispatch();
  // const [ modalInfoProduct, setModalInfoProduct ] = useState(false);
  //   console.log('token: ',token);

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
                user && !loading?
                (
                  <>
                  <ContentInfoPoints>
                      <PointsLabel>
                          Seus Pontos: 
                      </PointsLabel>
                      <PointsValue>
                              {user.points} <GiPopcorn/> 
                      </PointsValue>
                  </ContentInfoPoints>
                  <RoletaComp />
                  </>
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

export default Roleta;