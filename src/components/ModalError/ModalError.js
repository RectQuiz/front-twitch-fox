import React from 'react';

import {
    Container,
    
    ContentCardInfo,
    ContentImage,
    ContentInfoCard,

    TitleCard,
    ContentButtonAdd,
    ButtonAdd
 } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { MdError } from 'react-icons/md';
import { 
  setErrorGeneral
} from '../../store/modules/error/actions';
import { useHistory } from 'react-router-dom';

function ModallError({
    show,
}) {

    let history = useHistory();
    const dispatch = useDispatch();
    const { error_general, status_error, code_general } = useSelector(({ ErrorReducer }) => ErrorReducer);

    const dimisissModal = (e)=>{
        console.log('fechou error modal status: ',status_error);
        console.log('fechou error modal code:',code_general);
        if (e.target === e.currentTarget) {
            if (code_general == 401) {
                console.log('fechou error modal erro 401');
                localStorage.removeItem('@siteJokerz/token');
                localStorage.removeItem('@siteJokerz/nickname');
                history.push('/home');
                dispatch(setStatusModal(false));
                dispatch(setErrorGeneral('',false,0));
            }else{
                dispatch(setStatusModal(false));
                dispatch(setErrorGeneral('',false,0));
                // history.push('home');
            }
        }
    }

    return (
            show && 
            (
                <Container className='fundo' onClick={dimisissModal}>
                    <ContentCardInfo>
                        <ContentImage>
                            <MdError size={130} color={'#fff'}/>
                        </ContentImage>

                        <ContentInfoCard>
                            <TitleCard>
                                {error_general}
                            </TitleCard>
                        </ContentInfoCard>
                    
                        <ContentButtonAdd>
                            <ButtonAdd onClick={dimisissModal} active={true} >
                               OK
                            </ButtonAdd>
                        </ContentButtonAdd>

                    </ContentCardInfo>
                </Container>
            )
    );
}

export default ModallError;