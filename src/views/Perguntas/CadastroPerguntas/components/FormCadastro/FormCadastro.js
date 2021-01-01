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
    ButtonForm,
    ContentSelect,
    SelectNivel,
    OptionSelectNivel
} from './styles';
import Select from 'react-select';
import { initialvalues } from './initialvalues';
import perguntaSchema from './perguntaSchema';

function FormCadastro({registrarPergunta,niveis}) {

  const {
    values,
    handleSubmit,
    submitCount,
    getFieldProps,
    setValues,
    touched,
    errors,
    setFieldValue,
    setTouched
  } = useFormik({
    initialValues:initialvalues,
    validationSchema:perguntaSchema,
    onSubmit:onSubmitPergunta
  });

  function onSubmitPergunta(){
    registrarPergunta(values);
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
                      CADASTRO DE PERGUNTAS
                  </TitleForm>
              </HeaderForm>
              <ContentForm>

                <ContainerInput>
                  <LabelForm>
                      Titulo da pergunta:
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
                      Nivel da Pergunta:
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
                      Categoria da pergunta:
                  </LabelForm>
                  <InputForm
                        type="text"
                        name="categoria"
                        id="categoria"
                        className="categoria"
                        value={values.categoria} // We also bind our email value
                        {...getFieldProps("categoria")}
                  />
                  <ErroForm className="errorMessage">
                    {touched["categoria"] && errors["categoria"]}
                  </ErroForm>
                </ContainerInput>

                <ContainerInput>
                  <LabelForm>
                      Tempo para responder:
                  </LabelForm>
                  <InputForm
                        type="number"
                        name="tempo"
                        id="tempo"
                        className="tempo"
                        value={values.tempo} // We also bind our email value
                        {...getFieldProps("tempo")}
                  />
                  <ErroForm className="errorMessage">
                    {touched["tempo"] && errors["tempo"]}
                  </ErroForm>
                </ContainerInput>

                <ContainerInput>
                  <LabelForm>
                      Alternativa 1:
                  </LabelForm>
                  <InputForm
                        type="text"
                        name="alternativas"
                        id="alternativas"
                        value={values.alternativas[0].name} // We also bind our email value
                        onChange={(event)=>{
                          let alt = values.alternativas;
                          alt[0].name = event.target.value;
                          setTouched({...touched,alternativas:true});
                          setFieldValue('alternativas',alt);
                        }}
                  />
                  <ErroForm className="errorMessage">
                    {touched["alternativas"] && ((errors["alternativas"] && errors["alternativas"][0]) && errors["alternativas"][0]["name"])}
                  </ErroForm>
                </ContainerInput>
                
                <ContainerInput>
                  <LabelForm>
                      Alternativa 2:
                  </LabelForm>
                  <InputForm
                        type="text"
                        name="alternativas"
                        id="alternativas"
                        value={values.alternativas[1].name} // We also bind our email value
                        onChange={(event)=>{
                          let alt = values.alternativas;
                          alt[1].name = event.target.value;
                          setTouched({...touched,alternativas:true});
                          setFieldValue('alternativas',alt);
                        }}
                  />
                  <ErroForm className="errorMessage">
                    {touched["alternativas"] && ((errors["alternativas"] && errors["alternativas"][1]) && errors["alternativas"][1]["name"])}
                  </ErroForm>
                </ContainerInput>
                
                <ContainerInput>
                  <LabelForm>
                      Alternativa 3:
                  </LabelForm>
                  <InputForm
                        type="text"
                        name="alternativas"
                        id="alternativas"
                        value={values.alternativas[2].name} // We also bind our email value
                        onChange={(event)=>{
                          let alt = values.alternativas;
                          alt[2].name = event.target.value;
                          setTouched({...touched,alternativas:true});
                          setFieldValue('alternativas',alt);
                        }}
                  />
                  <ErroForm className="errorMessage">
                    {touched["alternativas"] && ((errors["alternativas"] && errors["alternativas"][2]) && errors["alternativas"][2]["name"])}
                  </ErroForm>
                </ContainerInput>
                
                <ContainerInput>
                  <LabelForm>
                      Alternativa 4:
                  </LabelForm>
                  <InputForm
                        type="text"
                        name="alternativas"
                        id="alternativas"
                        value={values.alternativas[3].name} // We also bind our email value
                        onChange={(event)=>{
                          let alt = values.alternativas;
                          alt[3].name = event.target.value;
                          setTouched({...touched,alternativas:true});
                          setFieldValue('alternativas',alt);
                        }}
                  />
                  <ErroForm className="errorMessage">
                    {touched["alternativas"] && ((errors["alternativas"] && errors["alternativas"][3]) && errors["alternativas"][3]["name"])}
                  </ErroForm>
                </ContainerInput>

                <ContainerInput>
                  <LabelForm>
                      Qual a alternativa correta (1 - 4):
                  </LabelForm>
                  <InputForm
                        type="number"
                        name="resposta"
                        id="resposta"
                        className="resposta"
                        value={values.resposta} // We also bind our email value
                        {...getFieldProps("resposta")}
                  />
                  <ErroForm className="errorMessage">
                    {touched["resposta"] && errors["resposta"]}
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