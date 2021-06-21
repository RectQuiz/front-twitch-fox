import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { cadastrarProduct, loadProducts, setResponseProducts, setStatusProducts } from '../../../store/modules/products/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { FormCadProduct } from './components';

import {
    Content,
    BackgroundColor,
    ContentBodyDash
} from './styles';

function CreateProduct({history}) {
    const dispatch = useDispatch();
    const { user, users, loading:loadingUser } = useSelector(({ UserReducer }) => UserReducer);
    const { products, totalPages, currentPage, loading:loadingProduct, status, errors } = useSelector(({ ProductsReducer }) => ProductsReducer);
    console.log("user: ",user);

    useEffect(()=>{
        console.log('loadInfoUser CreateProduct');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:2.2}));
    },[]);

    useEffect(()=>{
      if (loadingProduct == false && status == 201 && errors.length == 0) {
        dispatch(setStatusProducts(0));
        dispatch(setResponseProducts({}));
        dispatch(loadProducts({page:currentPage,last:true}));
        history.push('/dashboard/loja');
      }
    },[status]);

    function registerProduct(values) {
        console.log("values: ",values);
        const data = new FormData();    
        let stickersinfo = [];
        
        console.log("stickers: ",values.stickers);
        for (let i = 0; i < values.stickers.length; i++) {
            if (values.stickers[i].file) {
                stickersinfo.push({
                    name:values.stickers[i].nome,
                    slot:values.stickers[i].slot
                });
                data.append(`stickers_${values.stickers[i].slot}`, values.stickers[i].file);
            }
        }
        
        // data.append(`stickersinfo`, stickersinfo);
        data.append(`stickersinfo`, JSON.stringify(stickersinfo));
        data.append(`quant_stickers`, stickersinfo.length);
    
        Object.keys(values).forEach(key => {
            if(key != "stickers" && key != "stickersinfo" && key != "quant_stickers") data.append(key, values[key]);
        });
    
        dispatch(cadastrarProduct(data));
    }

    return (
        <Content>
            <BackgroundColor>
                
                    {
                        loadingUser || loadingProduct?
                        (
                            <ScaleLoader
                                // css={override}
                                color="#DC143C"
                                height={60}
                                width={7}
                                margin={7}
                                loading={true}
                            />
                        ):
                        (
                            <ContentBodyDash>
                                <HeaderDashBoard
                                    title={"Cadastrar produto"}
                                    subtitle={"Áre para cadastrar um novo produto."}
                                />
                                <FormCadProduct registerProduct={registerProduct}/>
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default CreateProduct;