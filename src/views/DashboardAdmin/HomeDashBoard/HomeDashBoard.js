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
// import { FormLogin } from './components';


function HomeDashBoard() {
    const dispatch = useDispatch();
    const { user, users, loading:loadingUser, errors:errorsUser, status:statusUser } = useSelector(({ UserReducer }) => UserReducer);
    console.log("user: ",user);

    useEffect(()=>{
        console.log('loadInfoUser DashboardAdmin HomeDashBoard');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:1.1}));
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
                                <HeaderDashBoard title={"Sua aréa de informações gerais"} subtitle={"Aréa para vizualizar informações gerais."} />
                                    HOME
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default HomeDashBoard;