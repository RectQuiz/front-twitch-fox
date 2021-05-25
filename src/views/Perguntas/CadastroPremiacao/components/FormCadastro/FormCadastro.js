import React, { useState } from 'react';
import { Formik, useFormik, Field } from 'formik';

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
    ButtonForm,
    ContentSelect,
    SelectNivel,
    OptionSelectNivel,
    LabelInputfile,
    InputFormFile,
    ContentInputFile,
    ImagePremioCad,
    ContentImageInput
} from './styles';
import Select from 'react-select';
import { initialvalues } from './initialvalues';
import premiacaoSchema from './premiacaoSchema';

function FormCadastro({registrarPremiacao,niveis}) {

  const [ imagePreview, setImagePreview] = useState();

  const {
    values,
    handleSubmit,
    submitCount,
    getFieldProps,
    setValues,
    touched,
    errors,
    setFieldValue,
    setTouched,
    handleBlur
  } = useFormik({
    initialValues:initialvalues,
    validationSchema:premiacaoSchema,
    onSubmit:onSubmitPremiacao
  });

  function onSubmitPremiacao(){
    registrarPremiacao(values);
  }

  function handleImageChange(e) {
    e.preventDefault();
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
      setFieldValue('image_premio',file);
    }
  }

  // console.log('values: ', values);
  // console.log('errors: ', errors);
  // console.log('touched: ', touched);

  return (
      <Container>
          <Content>
            <FormNivel 
              onSubmit={handleSubmit}
              noValidate
            >
              <HeaderForm>
                  <TitleForm>
                      CADASTRO DE PREMIAÇÃO
                  </TitleForm>
              </HeaderForm>
              
              <ContentForm>

                <ContainerInput>
                  <LabelForm>
                      Titulo da premiação:
                  </LabelForm>
                  <InputForm
                        type="text"
                        name="titulo"
                        id="titulo"
                        className="titulo"
                        value={values.titulo} // We also bind our email value
                        {...getFieldProps("titulo")}
                  />
                  <ErroForm>
                    {touched["titulo"] && errors["titulo"]}
                  </ErroForm>
                </ContainerInput>
                
                <ContainerInput>
                  <LabelForm>
                      Nivel da Premiação:
                  </LabelForm>
                  <ContentSelect>
                    <SelectNivel
                      name="nivel"
                      id="nivel"
                      {...getFieldProps("nivel")}
                      value={values.nivel}
                    >
                      <OptionSelectNivel value={''} >.::SELECIONE UM NIVEL::.</OptionSelectNivel>
                      {
                        niveis != null?
                        niveis.map((nivel)=>{
                          return(
                            <OptionSelectNivel value={nivel._id} >{nivel.name}</OptionSelectNivel>
                          )
                        })
                        :
                        null
                      }
                    </SelectNivel>
                  </ContentSelect>
                  <ErroForm className="errorMessage">
                    {touched["nivel"] && errors["nivel"]}
                  </ErroForm>
                </ContainerInput>

                <ContainerInput>
                  <LabelForm>
                      Valor da premiação (Em pipocas):
                  </LabelForm>
                  <InputForm
                        type="number"
                        name="valor"
                        id="valor"
                        className="valor"
                        value={values.valor} // We also bind our email value
                        {...getFieldProps("valor")}
                  />
                  <ErroForm className="errorMessage">
                    {touched["valor"] && errors["valor"]}
                  </ErroForm>
                </ContainerInput>
                
                <ContainerInput>
                  <LabelForm>
                      Indice da prêmiação (1 - 15):
                  </LabelForm>
                  <InputForm
                        type="number"
                        name="indice"
                        id="indice"
                        max={15}
                        min={1}
                        className="indice"
                        value={values.indice} // We also bind our email value
                        {...getFieldProps("indice")}
                  />
                  <ErroForm className="errorMessage">
                    {touched["indice"] && errors["indice"]}
                  </ErroForm>
                </ContainerInput>

                <ContainerInput>
                  <LabelForm className="image_premio">
                      Imagem do prêmio:
                  </LabelForm>

                  <ContentInputFile>
                    <LabelInputfile for='image_premio'>
                        Selecionar um arquivo &#187;
                    </LabelInputfile>
                    <InputFormFile
                        type="file"
                        name="image_premio"
                        id="image_premio"
                        onChange={handleImageChange}
                        onBlur={handleBlur}
                        touched={touched["image_premio"]}
                        style={{ display: "flex" }}
                        setFieldValue={setFieldValue}
                        className="file-upload"
                        accept="image/*" 
                        // {...getFieldProps("image_premio")}
                    />
                  </ContentInputFile>
                  
                  <ContentImageInput>
                    <ImagePremioCad className="profile-pic" src={imagePreview}/>
                  </ContentImageInput>

                  <ErroForm className="errorMessage">
                    {touched["image_premio"] && errors["image_premio"]}
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