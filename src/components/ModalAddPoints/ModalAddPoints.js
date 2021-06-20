import React, { useEffect, useState } from 'react';

import {
    Container,
    
    ContentAddPoints,
    TitleAddPoints,
    ContentFormAddPoints,
    
    FormAddPoints,
    ContentForm,
    ContainerInput,
    LabelForm,
    InputRequirede,
    InputForm,
    ErroForm,
    ContainerButton,
    ButtonForm
 } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setStatusModal
} from '../../store/modules/modal/actions';
import { GiPopcorn } from 'react-icons/gi';
import { FaInfoCircle } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { MdSubtitles } from 'react-icons/md';
import { useHistory } from 'react-router';
import colors from '../../styles/colors';
import { redeemProductAction, setResponseProducts } from '../../store/modules/products/actions';
import { API_URL } from '../../services/config';
import { useFormik } from 'formik';
import { initialvalues } from './initialvalues';
import addPointsSchema from './addPointsSchema';
import ScaleLoader from "react-spinners/ScaleLoader";

import { addPointsUserAction, loadRedeemPoints, setResponseRedeemPoints, setStatusRedeemPoints } from '../../store/modules/points/actions';


function ModalAddPoints({
    show
}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loading:loadingPoints, errors:errorsPoints, status } = useSelector(({ PointsReducer }) => PointsReducer);


    const {
        values,
        handleSubmit,
        submitCount,
        getFieldProps,
        setValues,
        touched,
        errors,
        setErrors,
        setFieldValue,
        setTouched,
        handleBlur
    } = useFormik({
        initialValues:initialvalues,
        validationSchema:addPointsSchema,
        onSubmit:onSubmitAddPoints
    });
    
    useEffect(()=>{
        if (loadingPoints == false && status == 201 && errorsPoints.length == 0) {
          dispatch(setStatusRedeemPoints(0));
          dispatch(setResponseRedeemPoints({}));
          dispatch(loadRedeemPoints({page:1,last:true}));
        //   dispatch(setStatusModal(false));
        }
    },[status]);
    
    function onSubmitAddPoints(){
        console.log(values);
        dispatch(addPointsUserAction(values));
    }

    const dimisissModal = (e)=>{
        // console.log(e.target);
        // console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            dispatch(setStatusModal(false));
        }
    }

    const adicionarPontos = ()=>{
    }

    return (
            show && 
            (
                <Container className='fundo' onClick={dimisissModal}>
                    {
                        (
                            <ContentAddPoints>
                                <TitleAddPoints>
                                    {`Adicionar ou remover pontos`}
                                </TitleAddPoints>
                                <ContentFormAddPoints>
                                    <FormAddPoints
                                        onSubmit={handleSubmit}
                                        noValidate
                                    >
                                            {/* nickname */}
                                            <ContentForm>
                                                <ContainerInput>
                                                    <LabelForm>
                                                        Nickname do usuário:
                                                    </LabelForm>
                                                    <InputForm
                                                            disabled={loadingPoints}
                                                            type="text"
                                                            name="nickname"
                                                            id="nickname"
                                                            className="nickname"
                                                            value={values.nickname}
                                                            {...getFieldProps("nickname")}
                                                    />
                                                    <ErroForm>
                                                        {touched["nickname"] && errors["nickname"]}
                                                    </ErroForm>
                                                </ContainerInput>
                                            </ContentForm>
                                            
                                            {/* pontos */}
                                            <ContentForm>
                                                <ContainerInput>
                                                    <LabelForm>
                                                        Pontos:
                                                    </LabelForm>
                                                    <InputForm
                                                            disabled={loadingPoints}
                                                            type="number"
                                                            name="pontos"
                                                            id="pontos"
                                                            className="pontos"
                                                            value={values.pontos} // We also bind our email value
                                                            {...getFieldProps("pontos")}
                                                    />
                                                    <ErroForm>
                                                        {touched["pontos"] && errors["pontos"]}
                                                    </ErroForm>
                                                </ContainerInput>
                                            </ContentForm>
                                            
                                            <ContainerButton>
                                                {
                                                    !loadingPoints?
                                                    (
                                                        <ButtonForm type="submit">
                                                            Confirmar
                                                        </ButtonForm>
                                                    ):
                                                    (
                                                        <ScaleLoader
                                                            // css={override}
                                                            color={colors.primary_geral}
                                                            height={60}
                                                            width={7}
                                                            margin={7}
                                                            loading={true}
                                                        />
                                                    )
                                                }
                                            </ContainerButton>

                                    </FormAddPoints>
                                </ContentFormAddPoints>
                            </ContentAddPoints>
                        )
                    }

                </Container>
            )
    );
}

export default ModalAddPoints;