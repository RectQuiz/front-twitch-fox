import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from '../../../components';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';

import {
    Content,
    BackgroundColor,
    ContentBodyDash
} from './styles';

function CreateProduct() {
    const dispatch = useDispatch();
    const { user, users, loading:loadingUser, errors:errorsUser, status:statusUser } = useSelector(({ UserReducer }) => UserReducer);
    console.log("user: ",user);

    useEffect(()=>{
        console.log('loadInfoUser CreateProduct');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:2.2}));
    },[]);

    return (
        <Content>
            <BackgroundColor>
                
                    {
                        loadingUser?
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
                                    HOME
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default CreateProduct;