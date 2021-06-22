import React from 'react';

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
import colors from '../../styles/colors';

function Loading({
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
                            <ScaleLoader
                                // css={override}
                                color={colors.primary_geral}
                                height={60}
                                width={7}
                                margin={7}
                                loading={true}
                            />
                    </ContentCardInfo>
                </Container>
            )
    );
}

export default Loading;