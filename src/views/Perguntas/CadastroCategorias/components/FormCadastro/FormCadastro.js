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
import categoriaSchema from './categoriaSchema';

function FormCadastro({registrarCategoria}) {

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
    validationSchema:categoriaSchema,
    onSubmit:onSubmitCategoria
  });

  function onSubmitCategoria(){
    registrarCategoria(values);
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