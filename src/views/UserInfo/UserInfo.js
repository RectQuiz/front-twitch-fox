import React, { useState ,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    Content,
    BackgroundColor,
    ContentInfoUser
} from './styles';

import {
    loadInfoUser,
    setStatus,
    setError,
    setStatusTypePerson,
    loadAccountsForType
} from '../../store/modules/user/actions';
import { Footer } from '../../components';
import ScaleLoader from "react-spinners/ScaleLoader";
import { InfoUser } from './components';
import { Redirect } from 'react-router-dom';

function UserInfo(props) {
    const { location, history } = props;
    useEffect(()=>{
        console.log('loadInfoUser UserInfo');
        dispatch(loadInfoUser());
    },[]);
    const dispatch = useDispatch();
    // const { nick_user } = useParams();
    const { user, users, loading, errors, status } = useSelector(({ UserReducer }) => UserReducer);
    const [ typeSelected, setTypeSelected ] = useState({ value: '', label: 'SELECIONE::::' });
    const [ selectedPrimaryAccount, setSelectedPrimaryAccount ] = useState({ value: '', label: 'SELECIONE::::' });
    const typesAccount = [
        { value: 'secondary', label: 'Secundaria' },
        { value: 'primary', label: 'Primaria' },
      ];


    useEffect(()=>{
        if (status == 200 && errors.length == 0 && loading == false) {
            // console.log('user:',user);
            dispatch(setStatus(0));
        }
    },[status]);
    
    useEffect(()=>{
        if (String(errors).length > 0) {
            // console.log('Error ao carregar info do user: ',errors);
            // window.location.reload(false);
            setTypeSelected({ value: '', label: 'SELECIONE::::' });
            dispatch(setError(''));
        }
    },[errors]);

    const addTypeAccount = (selectedOption) => {
        if (selectedOption.value == 'primary') {
            dispatch(setStatusTypePerson({
                type_account:selectedOption.value,
            }));
        }
        if(selectedOption.value == 'secondary'){
            setTypeSelected(selectedOption);
            dispatch(loadAccountsForType({
                type:'primary'
            }));
        }
    };
    
    const addPrimaryAccount = (selectedOption) => {
        console.log('selectedOption addPrimaryAccount: ',selectedOption);
        if (selectedOption.value.length > 0) {
            dispatch(setStatusTypePerson({
                type_account:'secondary',
                id_person_primary:selectedOption.id_person
            }));
        }
    };

    return (
        <Content>
            <BackgroundColor>
                    {
                        loading?
                        (
                            <ScaleLoader
                                color="#DC143C"
                                height={60}
                                width={7}
                                margin={7}
                                loading={true}
                            />
                        ):
                        (
                            user? 
                            (
                                !user.streamer ? 
                                (
                                    <InfoUser
                                        users={users}
                                        user={user}
                                        typesAccount={typesAccount}
                                        addTypeAccount={addTypeAccount}
                                        typeSelected={typeSelected}
                                        addPrimaryAccount={addPrimaryAccount}
                                    />
                                )
                                :(<Redirect to={{pathname:'/home', state:{from:location}}} />)
                            )
                            :(<></>)
                            
                        )
                    }
            <Footer/>
            </BackgroundColor>
        </Content>
    )
}

export default UserInfo;