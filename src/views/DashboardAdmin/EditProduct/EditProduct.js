import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { deleteStickerProductAction, editProductAction, loadProduct, loadProducts, setResponseProducts, setStatusProducts } from '../../../store/modules/products/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { FormEditProduct } from './components';

import {
    Content,
    BackgroundColor, 
    ContentBodyDash
} from './styles';

function EditProduct({history}) {
    const dispatch = useDispatch();
    const { id_product } = useParams();
    const { user, users, loading:loadingUser } = useSelector(({ UserReducer }) => UserReducer);
    const { product, products, totalPages, currentPage, loading:loadingProduct, status, errors } = useSelector(({ ProductsReducer }) => ProductsReducer);
    // console.log("status: ",status);
    // console.log("user: ",user);
    // console.log("product: ",product);

    useEffect(()=>{
        console.log('loadInfoUser CreateProduct');
        dispatch(loadInfoUser());
        dispatch(loadProduct(id_product));
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

    function editProduct(values) {
        // console.log("values: ",values);
        const data = new FormData();    
        let stickersinfo = [];
        if (values.imageurl.size && values.imageurl.size > 0 ) {
            data.append(`imageurl`, values.imageurl);
        }
        console.log("stickers: ",values.stickers);
        for (let i = 0; i < values.stickers.length; i++) {
            console.log("sticker: ",values.stickers[i]);
            if (values.stickers[i].nome.length > 0) {
                stickersinfo.push({
                    name:values.stickers[i].nome,
                    slot:values.stickers[i].slot
                });
            }
            if (values.stickers[i].file) {
                data.append(`stickers_${values.stickers[i].slot}`, values.stickers[i].file);
            }
        }
    
        // data.append(`stickersinfo`, stickersinfo);
        if (stickersinfo.length > 0) {
            data.append(`stickersinfo`, JSON.stringify(stickersinfo));
            data.append(`quant_stickers`, stickersinfo.length);
        }
    
        Object.keys(values).forEach(key => {
           if(
               key != "stickers" 
               && key != "stickersinfo" 
               && key != "quant_stickers"
               && key != "imagepath"
               && key != "imageurl"
            ) data.append(key, values[key]);
        });
    
        dispatch(editProductAction(data,id_product));
    }

    function deleteStickerProduct(slot) {
        dispatch(deleteStickerProductAction({
            product_id:id_product,
            slot:slot
        }));
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
                                    title={"Editar produto"}
                                    subtitle={"Áre para editar um produto."}
                                />
                                {
                                    product&&
                                    (
                                        <FormEditProduct product={product} editProduct={editProduct} deleteStickerProduct={deleteStickerProduct}/>
                                    )
                                }
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default EditProduct;