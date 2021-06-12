import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { HeaderDashBoard, ListRedeemProducts } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { ListResgates } from './components';
import colors from '../../../styles/colors';

import {
    Content,
    BackgroundColor,
    ContentBodyDash,
    ContentRowDashBoard
} from './styles';
import { useHistory } from 'react-router';
import { loadRedeemProducts } from '../../../store/modules/products/actions';

function ListResgateProdutos() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [ modalDetailItem, setModaDetailItem ] = useState(false);
    const { user, users, loading:loadingUser } = useSelector(({ UserReducer }) => UserReducer);
    const { redeemProducts, totalPages, currentPage, loading:loadingProducts } = useSelector(({ ProductsReducer }) => ProductsReducer);

    console.log('redeemProducts DashboardAdmin: ',redeemProducts);
    useEffect(()=>{
        console.log('loadInfoUser DashboardAdmin');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:2.3}));
        load_redeem_products(1);
    },[]);

    const load_redeem_products = (page)=>{
      dispatch(loadRedeemProducts({page:page,last:true}));
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
                                <HeaderDashBoard reload={()=>load_redeem_products(1)} title={"Aréa de produtos resgatados"} subtitle={"Sua aréa de listagem geral de produtos resgatados."} />
                                <ContentRowDashBoard>
                                    {
                                        redeemProducts&&
                                        <ListRedeemProducts
                                        flex={redeemProducts.length > 0?8:0}
                                        load_redeem_products={load_redeem_products}
                                        redeemProducts={redeemProducts}
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        loading={loadingProducts}/>
                                    }
                                </ContentRowDashBoard>
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default ListResgateProdutos;