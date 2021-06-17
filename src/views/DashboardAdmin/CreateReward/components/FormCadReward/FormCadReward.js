import React, { useState } from 'react';
import { useFormik } from 'formik';
import { initialvalues } from './initialvalues';
import rewardSchema from './rewardSchema';

import {
    Container,
    Content,
    FormProduct,
    HeaderForm,
    TitleForm,
    ContentForm,
    ContainerInput,
    LabelForm,
    InputForm,
    ErroForm,
    ContainerSelectInput,

    InputRequirede,

    ContainerButton,
    ButtonForm,
} from './styles';
import Select from 'react-select';

function FormCadReward({registerReward}) {
    const [ enableSelected, setEnableSelected ] = useState({ value: '', label: 'SELECIONE::::' });

    const typesEnable = [
        { value:true, label: 'Sim' },
        { value:false, label: 'Não' },
    ];

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
      validationSchema:rewardSchema,
      onSubmit:onSubmitReward
    });
    
    function onSubmitReward(){
        registerReward(values);
    }

    const addActiveReward = (selectedOption) => {
        setFieldValue('is_enabled',selectedOption.value);
        setEnableSelected(selectedOption);
    };

    return (
        <Container>
            <Content>
                <FormProduct
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <HeaderForm>
                        <TitleForm>
                            CADASTRO DE REWARD
                        </TitleForm>
                    </HeaderForm>

                    {/* title */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Titulo do reward:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="title"
                                    value={values.title}
                                    {...getFieldProps("title")}
                            />
                            <ErroForm>
                                {touched["title"] && errors["title"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>
                    
                    {/* cost */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Custo do reward:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <InputForm
                                    type="number"
                                    name="cost"
                                    id="cost"
                                    className="cost"
                                    value={values.cost} // We also bind our email value
                                    {...getFieldProps("cost")}
                            />
                            <ErroForm>
                                {touched["cost"] && errors["cost"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>
                    
                    {/* ativo */}
                    <ContentForm>
                        <ContainerSelectInput>
                            <LabelForm>
                               Deseja cadastrar o reward e já ativalo?:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <Select
                                value={enableSelected}
                                onChange={addActiveReward}
                                options={typesEnable}
                            />
                            <ErroForm>
                                {touched["is_enabled"] && errors["is_enabled"]}
                            </ErroForm>
                        </ContainerSelectInput>
                    </ContentForm>

                    {/* button */}
                    <ContainerButton>
                        <ButtonForm type="submit">
                            Cadastrar
                        </ButtonForm>
                    </ContainerButton>

                </FormProduct>
            </Content>
        </Container>
    );
}

export default FormCadReward;