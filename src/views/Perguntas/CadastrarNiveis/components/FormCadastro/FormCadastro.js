import React from 'react';
import { Formik, useFormik  } from 'formik';

import {
    Container,
    Content,
    FormNivel,
    HeaderForm,
    TitleForm,
    ContentForm,
    ContainerInput,
    LabelForm,
    InputForm,
    ErroForm,
    ContainerButton,
    ButtonForm
} from './styles';
import { initialvalues } from './initialvalues';
import nivelSchema from './nivelSchema';

function FormCadastro({registrarNivel}) {

  const {
    values,
    handleSubmit,
    submitCount,
    getFieldProps,
    setValues,
    touched,
    errors,
    setFieldValue
  } = useFormik({
    initialValues:initialvalues,
    validationSchema:nivelSchema,
    onSubmit:onSubmitNivel
  });

  function onSubmitNivel(){
    registrarNivel(values);
  }

  return (
      <Container>
          <Content>
            <FormNivel 
              onSubmit={handleSubmit}
              noValidate
            >
              <HeaderForm>
                  <TitleForm>
                      CADASTRO DE NÍVEL
                  </TitleForm>
              </HeaderForm>
              <ContentForm>

                <ContainerInput>
                  <LabelForm>
                      Nome do nível:
                  </LabelForm>
                  <InputForm
                        type="text"
                        name="name"
                        id="name"
                        className="name"
                        value={values.name} // We also bind our email value
                        {...getFieldProps("name")}
                  />
                  <ErroForm className="errorMessage">
                    {touched["name"] && errors["name"]}
                  </ErroForm>
                </ContainerInput>
                
                <ContainerInput>
                  <LabelForm>
                      Numero do nível:
                  </LabelForm>
                  <InputForm
                        type="number"
                        name="number"
                        id="number"
                        className="number"
                        value={values.number} // We also bind our email value
                        {...getFieldProps("number")}
                  />
                  <ErroForm className="errorMessage">
                    {touched["number"] && errors["number"]}
                  </ErroForm>
                </ContainerInput>
                <ContainerButton>
                  <ButtonForm type="submit">
                      Cadastrar
                  </ButtonForm>
                </ContainerButton>
              </ContentForm>
            </FormNivel>
          </Content>
      </Container>
  );
}

export default FormCadastro;