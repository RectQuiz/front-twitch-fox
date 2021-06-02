import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ScaleLoader from "react-spinners/ScaleLoader";
import { Footer, HeaderDashBoard } from '../../../components';
import { getUrlAuthTwitch } from '../../../store/modules/login/actions';
import { SelectItemMenuAdmin } from '../../../store/modules/menuAdmin/actions';
import { loadInfoUser } from '../../../store/modules/user/actions';
import { LinkedAccounts } from './components';

import {
    Content,
    BackgroundColor,
    ContentBodyDash
} from './styles';
// import { FormLogin } from './components';


function UserConfigDashBoard() {
    const dispatch = useDispatch();
    const { id_user } = useParams();
    const { user, users, loading:loadingUser, errors:errorsUser, status:statusUser } = useSelector(({ UserReducer }) => UserReducer);
    console.log("user: ",user);

    useEffect(()=>{
        console.log('loadInfoUser DashboardAdmin UserConfigDashBoard');
        dispatch(loadInfoUser());
        dispatch(SelectItemMenuAdmin({index:3.1}));
    },[]);

    function linkedAccount(name) {
        switch (name) {
            case 'Twitch':
                dispatch(getUrlAuthTwitch({state:user?user._id:''}));
                break;
        
            default:
                break;
        }
    }

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
                                <HeaderDashBoard title={"Configuração"} subtitle={"Aréa para configuração da sua conta."} />
                                <LinkedAccounts linkedAccount={linkedAccount} user={user} />
                            </ContentBodyDash>
                        )
                    }
                {/* <Footer/> */}
            </BackgroundColor>
        </Content>
    );
}

export default UserConfigDashBoard;