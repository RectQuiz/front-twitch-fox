import React from 'react';

import {
    Container,
    
    ContentCardInfo,
    ContentImage,
    Image,
    ContentInfoCard,

    TitleCard,
    DescCard,
    ActionCard,
    Amount,
    ButtonAction,
    ContentPrice,
    Price,
    Desconto,
    PriceOld,
    ContentAction,
    ContentButtonAdd,
    ButtonAdd
 } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { Button } from 'react-bootstrap';
import { GiPopcorn } from 'react-icons/gi';
import { FaEye, FaInfoCircle } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
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
        // console.log(e.target);
        // console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            dispatch(setStatusModal(false));
            dispatch(setErrorGeneral('',false,0));
            if (status_error == 401) {
                localStorage.removeItem('@siteJokerz/token');
                localStorage.removeItem('@siteJokerz/nickname');
                history.push('home');
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