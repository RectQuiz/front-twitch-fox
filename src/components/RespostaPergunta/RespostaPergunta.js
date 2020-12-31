import React, { useEffect } from 'react';

import {
    Container,
    ContentCardInfo,
 } from './styles';
import { useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { 
  setErrorGeneral
} from '../../store/modules/error/actions';
import ScaleLoader from "react-spinners/ScaleLoader";

function RespostaPergunta({
    show,
    title
}) {

    const dispatch = useDispatch();
    const dimisissModal = (e)=>{
        if (e.target === e.currentTarget) {
                dispatch(setStatusModal(false));
                dispatch(setErrorGeneral('',false,0));
        }
    }

    return (
            show && 
            (
                <Container className='fundo' onClick={dimisissModal}>
                    <ContentCardInfo>
                        {title}
                    </ContentCardInfo>
                </Container>
            )
    );
}

export default RespostaPergunta;