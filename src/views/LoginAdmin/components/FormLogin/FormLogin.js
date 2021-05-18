import React from 'react';
import { Formik, useFormik  } from 'formik';
import { initialvalues } from './initialvalues';
import loginAdminSchema from './loginAdminSchema';

import {
    Container,
    //FORM
    FormLoginAdmin,
    //INPUT
    ContainerFormLogin,
    ContainerInput,
    LabelInput,
    Input,
    ErroForm,
    //BUTTON INPUT
    ContainerButton,
    ButtonForm
} from './styles';

function FormLogin({login}) {
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
      validationSchema:loginAdminSchema,
      onSubmit:onSubmitLoginAdmin
    });

    function onSubmitLoginAdmin(){
        console.log("values: ",values);
        login(values);
    }

    return (
        <Container>
            <FormLoginAdmin
                onSubmit={handleSubmit}
                noValidate
            >
                <ContainerFormLogin>

                    <ContainerInput>
                        <LabelInput>
                        Nickname:
                        </LabelInput>
                        <Input
                            type="text"
                            name="nickname"
                            id="nickname"
                            className="nickname"
                            value={values.nickname} // We also bind our email value
                            {...getFieldProps("nickname")}
                        />
                        <ErroForm className="errorMessage">
                        {touched["nickname"] && errors["nickname"]}
                        </ErroForm>
                    </ContainerInput>
                    
                    <ContainerInput>
                        <LabelInput>
                        Senha:
                        </LabelInput>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            className="password"
                            value={values.password} // We also bind our email value
                            {...getFieldProps("password")}
                        />
                        <ErroForm className="errorMessage">
                        {touched["password"] && errors["password"]}
                        </ErroForm>
                    </ContainerInput>
                    
                    <ContainerButton>
                        <ButtonForm type="submit">
                            Entrar
                        </ButtonForm>
                    </ContainerButton>

                </ContainerFormLogin>
            </FormLoginAdmin>
        </Container>
    );
}

export default FormLogin;