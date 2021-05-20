import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from '../../components';
import { SelectItemMenuAdmin } from '../../store/modules/menuAdmin/actions';
import { loadProducts } from '../../store/modules/products/actions';
import { loadInfoUser } from '../../store/modules/user/actions';
import { ButtonAddProduct, ItensLastAdd } from './components';
import { FaPlus } from 'react-icons/fa';

import {
    Content,
    BackgroundColor,
    ContentBodyDash,
    ContentRowDashBoard,
    ContentColumDashBoard
} from './styles';
import colors from '../../styles/colors';
import { setStatusModal } from '../../store/modules/modal/actions';

function LojaConfig() {
    const dispatch = useDispatch();
    const { user, users, loading:loadingUser, errors:errorsUser, status:statusUser } = useSelector(({ UserReducer }) => UserReducer);
    const { products, totalPages, currentPage, loading:loadingProduct } = useSelector(({ ProductsReducer }) => ProductsReducer);
    const { status } = useSelector(({ ModalReducer }) => ModalReducer);
    // console.log("user: ",user);

    useEffect(()=>{
        console.log('loadInfoUser DashboardAdmin');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:1}));
        dispatch(loadProducts({page:1}));
    },[]);

    const setModalInfoProduct = (status_set)=>{
      if (status_set != status) {
        dispatch(setStatusModal(status_set));
      }
    }

    const load_products = async(page)=>{
      dispatch(loadProducts({page:page}));
    };
    
    return (
        <Content>
            <BackgroundColor>
                
                    {
                        loadingUser?
                        (
                            <ScaleLoader
                                // css={override}
                                color={colors.primary_geral}
                                height={60}
                                width={7}
                                margin={7}
                                loading={true}
                            />
                        ):
                        (
                            <ContentBodyDash>
                                <HeaderDashBoard title={"Sua aréa de configuração da loja"} subtitle={"Aréa de configuração da loja."} />
                                <ContentRowDashBoard>
                                    {
                                        products&&<ItensLastAdd
                                        load_products={load_products}
                                        setModal={setModalInfoProduct}
                                        modal={status} flex={8}
                                        products={products}
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        loading={loadingProduct}/>
                                    }
                                    <ContentColumDashBoard flex={2}>
                                        {
                                            products&&<ButtonAddProduct iconButton={<FaPlus size={50} color={colors.primary_dashboard} />} textButton={"Criar produto"} />
                                        }
                                    </ContentColumDashBoard>
                                </ContentRowDashBoard>
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default LojaConfig;