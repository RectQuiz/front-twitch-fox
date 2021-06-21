import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { cadProductsSteam, loadProducts, setResponseProducts, setStatusProducts } from '../../../store/modules/products/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { ButtonActionProduct, ItensLastAdd } from './components';
import { FaPlus, FaSteam } from 'react-icons/fa';
import colors from '../../../styles/colors';
import { setStatusModal } from '../../../store/modules/modal/actions';

import {
    Content,
    BackgroundColor,
    ContentBodyDash,
    ContentRowDashBoard,
    ContentColumDashBoard
} from './styles';
import { useHistory } from 'react-router';

function LojaConfig() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [ modalDetailItem, setModaDetailItem ] = useState(false);
    const { user, users, loading:loadingUser } = useSelector(({ UserReducer }) => UserReducer);
    const { products, totalPages, currentPage, loading:loadingProduct, errors, status } = useSelector(({ ProductsReducer }) => ProductsReducer);
    console.log("currentPage: ",currentPage);

    useEffect(()=>{
        console.log('loadInfoUser DashboardAdmin');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:2.1}));
        load_products(currentPage);
    },[]);

    useEffect(()=>{
      if (loadingProduct == false && status == 201 && errors.length == 0) {
        dispatch(setStatusProducts(0));
        dispatch(setResponseProducts({}));
        load_products(currentPage);
      }
    },[status]);

    const createProduct = ()=>{
        history.push("/dashboard/product/create");
    }

    const createProductSteam = ()=>{
        if (!loadingProduct) {
            dispatch(cadProductsSteam());
        }
    }
    
    const createPromotion = ()=>{

    }

    const load_products = async(page)=>{
      dispatch(loadProducts({page:page,last:true}));
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
                                <HeaderDashBoard reload={()=>load_products(currentPage)} title={"Sua aréa de configuração da loja"} subtitle={"Aréa de configuração da loja."} />
                                <ContentRowDashBoard>
                                    {
                                        products&&<ItensLastAdd
                                        load_products={load_products}
                                        setModal={setModaDetailItem}
                                        modal={modalDetailItem} 
                                        flex={products.length > 0?8:0}
                                        products={products}
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        loading={loadingProduct}/>
                                    }
                                    <ContentColumDashBoard flex={products && products.length > 0?2:1}>
                                        {
                                            products&&
                                            <ButtonActionProduct
                                                iconButton={<FaPlus size={50}color={colors.primary_dashboard} />}
                                                textButton={"Criar produto"}
                                                onClick={createProduct}
                                                color1={colors.primary_geral}
                                                color2={colors.primary_geral_dark}
                                            />
                                        }
                                        {
                                            products&&
                                            <ButtonActionProduct
                                                iconButton={<FaSteam size={50}color={colors.primary_dashboard} />}
                                                textButton={"Cadastrar itens da steam"}
                                                onClick={createProductSteam}
                                                color1={colors.steam_primary}
                                                color2={colors.black}
                                                loading={loadingProduct}
                                            />
                                        }
                                        {
                                            products&&
                                            <ButtonActionProduct
                                                iconButton={<FaPlus size={50}color={colors.primary_dashboard} />}
                                                textButton={"Criar promoção"}
                                                onClick={createPromotion}
                                                color1={colors.dourado}
                                                color2={colors.dourado_dark}
                                            />
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