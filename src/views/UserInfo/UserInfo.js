import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    Content,
    BackgroundColor,
    ContentInfoUser
} from './styles';
import { loadInfoUser, setStatus, setError } from '../../store/modules/user/actions';
import { Footer } from '../../components';
import ScaleLoader from "react-spinners/ScaleLoader";
import { InfoUser } from './components';

function UserInfo() {
    const dispatch = useDispatch();
    const { nick_user } = useParams();
    const { user, loading, errors, status } = useSelector(({ UserReducer }) => UserReducer);
    // console.log('nick_user: ',nick_user);

    useEffect(()=>{
        dispatch(loadInfoUser());
    },[]);

    useEffect(()=>{
        if (status == 200 && errors.length == 0 && loading == false) {
            console.log('user:',user);
            dispatch(setStatus(0));
        }
    },[status]);
    
    useEffect(()=>{
        if (String(errors).length > 0) {
            console.log('Error ao carregar info do user: ',errors);
            dispatch(setError(''));
        }
    },[errors]);

    return (
        <Content>
            <BackgroundColor>
            {
                loading?
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
                    <InfoUser user={user}/>
                )
            }
            <Footer/>
            </BackgroundColor>
        </Content>
    )
}

export default UserInfo;