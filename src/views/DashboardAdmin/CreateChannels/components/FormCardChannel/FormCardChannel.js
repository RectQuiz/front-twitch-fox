import React, { useState } from "react";
import { useFormik } from "formik";
import { initialvalues } from "./initialvalues";
import productSchema from "./channelSchema";
import { FaPlus } from "react-icons/fa";

import {
  Container,
  Content,
  FormProduct,
  HeaderForm,
  TitleForm,
  ContentForm,
  ContainerInput,
  ContainerSelectInput,
  LabelForm,
  InputForm,
  ErroForm,
  ContentImage,
  ContentImageInput,
  ImagePremioCad,
  ContentInputFile,
  ContentImageInputEmpty,
  InputFormFile,
  InputRequirede,
  ContainerButton,
  ButtonForm,
  InputCheckboxForm,
  ContentInputCheckbox,
} from "./styles";
import colors from "../../../../../styles/colors";
import Select from "react-select";

function FormCardChannel({ registerChannel, permissions }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [tradableSelected, setTradableSelected] = useState({
    value: "",
    label: "SELECIONE::::",
  });
  const typesTradable = [
    { value: true, label: "Comercializável" },
    { value: false, label: "Não comercializável" },
  ];

  const {
    values,
    setErrors,
    handleSubmit,
    getFieldProps,
    touched,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: initialvalues,
    validationSchema: productSchema,
    onSubmit: onSubmitProduct,
  });

  function onSubmitProduct() {
    let passed = false;
    let permissions_formated = [];
    let permissions_teste = values.permissions.filter((permission_teste) => {
      return permission_teste === true;
    });
    console.log("permissions_teste: ", permissions_teste);
    if (permissions_teste.length > 0) {
      let permissions_data =
        permissions &&
        permissions.filter((permission) => {
          return values.permissions[permission.ifo_permission.indice];
        });

      console.log("permissions_data: ", permissions_data);

      if (permissions_data && permissions_data.length > 0) {
        permissions_formated = permissions_data.map((permission_data) => {
          return {
            ifo_permission: permission_data.ifo_permission._id,
          };
        });
        passed = true;
      }
    } else {
      passed = false;
      console.log("nao tem permisssions");
      errors[`permissions`] = "Informe pelo menos uma permissão para o canal";
      setErrors({
        ...errors,
      });
      setTradableSelected({
        value: "",
        label: "SELECIONE::::",
      });
    }
    values.permissions_ = permissions_formated;
    console.log(values);
    registerChannel(values);
  }

  function handleImageChange(e) {
    e.preventDefault();
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    // console.log('imagePreview: ',URL.createObjectURL(e.target.files[0]));
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.readAsDataURL(file);
      setFieldValue("picture", file);
    }
  }

  const addTradableProduct = (selectedOption) => {
    setFieldValue("tradable", selectedOption.value);
    setTradableSelected(selectedOption);
  };

  console.log("tradableSelected: ", tradableSelected);
  console.log("errors: ", errors);
  console.log("errors: ", errors["permissions"]);

  return (
    <Container>
      <Content>
        <FormProduct onSubmit={handleSubmit} noValidate>
          <HeaderForm>
            <TitleForm>CADASTRO DE CANAL</TitleForm>
          </HeaderForm>

          <ContentImage>
            {imagePreview ? (
              <ContentImageInput for={`picture`}>
                <ImagePremioCad className="profile-pic" src={imagePreview} />
              </ContentImageInput>
            ) : (
              <ContentImageInputEmpty for={`picture`}>
                <FaPlus size={40} color={colors.white} />
              </ContentImageInputEmpty>
            )}

            <ContentInputFile>
              <InputFormFile
                type="file"
                name={`picture`}
                id={`picture`}
                onChange={(e) => handleImageChange(e)}
                // onBlur={handleBlur}
                // touched={touched["doc"]}
                style={{ display: "flex" }}
                // setFieldValue={setFieldValue}
                className="file-upload"
                accept=".png, .gif, .jpeg, .jpg"
                // {...getFieldProps("doc")}
              />
            </ContentInputFile>
          </ContentImage>

          {/* name */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>
                Nome do canal:
                <InputRequirede>*</InputRequirede>
              </LabelForm>
              <InputForm
                type="text"
                name="name"
                id="name"
                className="name"
                value={values.name}
                {...getFieldProps("name")}
              />
              <ErroForm>{touched["name"] && errors["name"]}</ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* password */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>
                Senha do canal ( pode ou não ser a conta da twitch ):
                <InputRequirede>*</InputRequirede>
              </LabelForm>
              <InputForm
                type="password"
                name="password"
                id="password"
                className="password"
                value={values.password}
                {...getFieldProps("password")}
              />
              <ErroForm>{touched["password"] && errors["password"]}</ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* nickname */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>
                Nickname do canal:
                <InputRequirede>*</InputRequirede>
              </LabelForm>
              <InputForm
                type="text"
                name="nickname"
                id="nickname"
                className="nickname"
                value={values.nickname}
                {...getFieldProps("nickname")}
              />
              <ErroForm>{touched["nickname"] && errors["nickname"]}</ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* points */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>
                Pontos iniciais do canal:
                <InputRequirede>*</InputRequirede>
              </LabelForm>
              <InputForm
                type="number"
                name="points"
                id="points"
                className="points"
                value={values.points} // We also bind our email value
                {...getFieldProps("points")}
              />
              <ErroForm>{touched["points"] && errors["points"]}</ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* linkTwitch */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>
                Link da Twitch:
                <InputRequirede>*</InputRequirede>
              </LabelForm>
              <InputForm
                type="text"
                name="linkTwitch"
                id="linkTwitch"
                className="linkTwitch"
                value={values.linkTwitch}
                {...getFieldProps("linkTwitch")}
              />
              <ErroForm>
                {touched["linkTwitch"] && errors["linkTwitch"]}
              </ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* permissions */}
          <ContentForm>
            <ContainerSelectInput>
              <LabelForm>
                Quais permissões este canal irá possuir?:
                <InputRequirede>*</InputRequirede>
              </LabelForm>
              {permissions &&
                permissions.map((permission) => (
                  <>
                    <ContentInputCheckbox>
                      <InputCheckboxForm
                        type="checkbox"
                        name={`permissions.${permission.ifo_permission.indice}`}
                        id={`permissions.${permission.ifo_permission.indice}`}
                        value={
                          values.permissions[
                            `${permission.ifo_permission.indice}`
                          ]
                        }
                        {...getFieldProps(
                          `permissions.${permission.ifo_permission.indice}`
                        )}
                      />
                      <labelInputCheckbox
                        for={`permissions.${permission.ifo_permission.indice}`}
                      >
                        {permission.ifo_permission.name}
                      </labelInputCheckbox>
                    </ContentInputCheckbox>
                  </>
                ))}

              <ErroForm>
                {errors["permissions"] && errors["permissions"]}
              </ErroForm>
            </ContainerSelectInput>
          </ContentForm>

          {/* accessTokenStreamElements */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>accessToken do StreamElements:</LabelForm>
              <InputForm
                type="text"
                name="accessTokenStreamElements"
                id="accessTokenStreamElements"
                className="accessTokenStreamElements"
                value={values.accessTokenStreamElements} // We also bind our email value
                {...getFieldProps("accessTokenStreamElements")}
              />
              <ErroForm>
                {touched["accessTokenStreamElements"] &&
                  errors["accessTokenStreamElements"]}
              </ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* porcetagem_indicacao */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>Porcentagem de indicação (0 a 100):</LabelForm>
              <InputForm
                type="number"
                name="porcetagem_indicacao"
                id="porcetagem_indicacao"
                className="porcetagem_indicacao"
                value={values.porcetagem_indicacao}
                {...getFieldProps("porcetagem_indicacao")}
              />
              <ErroForm>
                {touched["porcetagem_indicacao"] &&
                  errors["porcetagem_indicacao"]}
              </ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* divisorPoints */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>Divisor de pontos:</LabelForm>
              <InputForm
                type="number"
                name="divisorPoints"
                id="divisorPoints"
                className="divisorPoints"
                value={values.divisorPoints}
                {...getFieldProps("divisorPoints")}
              />
              <ErroForm>
                {touched["divisorPoints"] && errors["divisorPoints"]}
              </ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* IdStreamElements */}
          <ContentForm>
            <ContainerInput>
              <LabelForm>Id do StreamElements:</LabelForm>
              <InputForm
                type="text"
                name="IdStreamElements"
                id="IdStreamElements"
                className="IdStreamElements"
                value={values.IdStreamElements} // We also bind our email value
                {...getFieldProps("IdStreamElements")}
              />
              <ErroForm>
                {touched["IdStreamElements"] && errors["IdStreamElements"]}
              </ErroForm>
            </ContainerInput>
          </ContentForm>

          {/* button */}
          <ContainerButton>
            <ButtonForm type="submit">Cadastrar</ButtonForm>
          </ContainerButton>
        </FormProduct>
      </Content>
    </Container>
  );
}

export default FormCardChannel;
