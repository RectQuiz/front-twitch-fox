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
    loadAccountsForType,
    editUserAction
} from '../../store/modules/user/actions';
import { Footer } from '../../components';
import ScaleLoader from "react-spinners/ScaleLoader";
import { InfoUser } from './components';
import { Redirect } from 'react-router-dom';
import { loadRedeemProducts } from '../../store/modules/products/actions';
import { Helmet } from 'react-helmet';

function UserInfo(props) {
    const { location, history } = props;
    useEffect(()=>{
        console.log('loadInfoUser UserInfo');
        dispatch(loadInfoUser());
        load_redeem_products(1);
    },[]);
    const dispatch = useDispatch();
    // const { nick_user } = useParams();
    const { user, users, loading, errors, status } = useSelector(({ UserReducer }) => UserReducer);
    const [ typeSelected, setTypeSelected ] = useState({ value: '', label: 'SELECIONE::::' });
    const [ codigo, setCodigo ] = useState('');
    const [ usersPrimary, setUsersPrimary ] = useState(users && users.length > 0?users.map((user_)=>{return {value:user_.name,label:user_.name,id_person:user_._id}}):[]);
    const [ selectedPrimaryAccount, setSelectedPrimaryAccount ] = useState({ value: '', label: 'SELECIONE::::',id_person:''});
    const typesAccount = [
        { value: 'primary', label: 'Primária'},
        { value: 'secondary', label: 'Secundária'}
      ];
    
    useEffect(()=>{
        if (users && users.length > 0) {
            setUsersPrimary(users.map((user_)=>{return {value:user_.name,label:user_.name,id_person:user_._id}}));
        }
    },[users]);

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

    const load_redeem_products = (page)=>{
        dispatch(loadRedeemProducts({page:page,last:true, user:true}));
    };

    const selectTypeAccount = (selectedOption)=>{
        setTypeSelected(selectedOption);
        if(selectedOption.value == 'secondary'){
            dispatch(loadAccountsForType({
                type:'primary'
            }));
        }
    }

    const selectUserPrimary = (selectedOption)=>{
        setSelectedPrimaryAccount(selectedOption);
    }

    const addTypeAccount = () => {
        if (typeSelected.value == 'primary') {
            dispatch(setStatusTypePerson({
                type_account:typeSelected.value,
                codigo:codigo.length > 0?codigo:null
            }));
        }else if (typeSelected.value == 'secondary') {
            dispatch(setStatusTypePerson({
                type_account:typeSelected.value,
                id_person_primary:selectedPrimaryAccount.id_person
            }));
        }else{

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
    
    const editUser = (body)=>{
        dispatch(editUserAction({id:user._id,body:body}));
    };

    return (
        <Content>
            <Helmet>
                <title>Seu perfil</title>
            </Helmet>
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
                                        codigo={codigo}
                                        setCodigo={setCodigo}
                                        load_redeem_products={load_redeem_products}
                                        usersPrimary={usersPrimary}
                                        user={user}
                                        typesAccount={typesAccount}
                                        addTypeAccount={addTypeAccount}
                                        typeSelected={typeSelected}
                                        addPrimaryAccount={addPrimaryAccount}
                                        editUser={editUser}
                                        selectTypeAccount={selectTypeAccount}
                                        selectedPrimaryAccount={selectedPrimaryAccount}
                                        selectUserPrimary={selectUserPrimary}
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