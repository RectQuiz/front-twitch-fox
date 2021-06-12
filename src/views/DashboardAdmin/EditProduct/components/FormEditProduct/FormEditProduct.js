import React, { useEffect, useState } from 'react';
import { Formik, useFormik, Field } from 'formik';
import { initialvalues } from './initialvalues';
import productSchema from './productSchema';
import { FaPlus, FaRegTrashAlt } from 'react-icons/fa';

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

    ContainerStickers,
    ContentStikerInput,
    LabelSlotSticker,
    ContentStickers,
    ContentSticker,
    ImageSticker,
    ContentStickerEmpty,
    ContainerButton,
    ButtonForm,
    ContentDeleteSticker
} from './styles';
import colors from '../../../../../styles/colors';
import { API_URL } from '../../../../../services/config';
import Select from 'react-select';

function FormEditProduct({editProduct,product, deleteStickerProduct}) {
    const [ imagePreview, setImagePreview] = useState(null);
    const [ tradableSelected, setTradableSelected ] = useState({ value: '', label: 'SELECIONE::::' });
    const [ stickers, setStickers] = useState([
        {
            nome:"",
            slot:1,
            file_url:null,
            file:null
        },
        {
            nome:"",
            slot:2,
            file_url:null,
            file:null
        },
        {
            nome:"",
            slot:3,
            file_url:null,
            file:null
        },
        {
            nome:"",
            slot:4,
            file_url:null,
            file:null
        }
    ]);
    const typesTradable = [
        { value:true, label: 'Comercializável' },
        { value:false, label: 'Não comercializável' },
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
      initialValues:product,
      validationSchema:productSchema,
      onSubmit:onSubmitProduct
    });

    useEffect(()=>{
        setImagePreview((product.imagepath || product.imageurl)?
            product.imagepath?`${API_URL}/${product.imagepath}`:product.imageurl:
        "");
        setFieldValue('imageurl','');
        setFieldValue('imagepath','');
        for (let i = 0; i < product.stickersinfo.length; i++) {
            let sticker = product.stickersinfo[i];
            console.log("sticker: ",sticker);
            console.log("stickers[sticker.slot-1]: ",stickers[sticker.slot-1]);
            stickers[sticker.slot-1].nome = sticker.name;
            stickers[sticker.slot-1].file_url = sticker.link_img?sticker.link_img:`${API_URL}/${sticker.path_img}`;
            setStickers([
                ...stickers
            ]);
        }
        setTradableSelected(product.tradable?typesTradable[0]:typesTradable[1]);
        setFieldValue("tradable",product.tradable?typesTradable[0].value:typesTradable[1].value);
        // var file = new Blob([data], {type: type});
    },[product]);
    
    function onSubmitProduct(){
        let passed = false;
        for (let i = 0; i < stickers.length; i++) {
            if (stickers[i].nome.length > 0 && (!stickers[i].file && !stickers[i].file_url)) {
                errors[`nome_sticker_${i}`] = "Informe a imagem do sticker";
                setErrors({
                    ...errors
                });
                passed = false;
                break;
            }else if (stickers[i].nome.length <= 0 && stickers[i].file) {
                errors[`nome_sticker_${i}`] = "Informe do nome do sticker";
                setErrors({
                    ...errors
                });
                passed = false;
                break;
            }else{
                passed = true;
            }
        }
        if (passed) {
            values.stickers = stickers;
            // values.stickersinfo = JSON.stringify(stickers);
            editProduct(values);
        }
    }
    
    function handleImageChange(e) {
        e.preventDefault();
        if (e.target.files.length > 0) {
            setImagePreview(URL.createObjectURL(e.target.files[0]));
            // console.log('imagePreview: ',URL.createObjectURL(e.target.files[0]));
            let reader = new FileReader();
            let file = e.target.files[0];
            if (file) {
              reader.readAsDataURL(file);
              setFieldValue('imageurl',file);
            }
        }
    }
    
    function handStickerChange(e,index) {
        e.preventDefault();
        // console.log('index: ',index);
        // setImagePreview(URL.createObjectURL(e.target.files[0]));
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file) {
            // console.log('file: ',file);
            // setNameImage(file.name);
            reader.readAsDataURL(file);
            // setFieldValue('doc_1',file);
            if (stickers[index]) {
                console.log('modificou sticker');
                // console.log('stickers: ',URL.createObjectURL(e.target.files[0]));
                stickers[index].file_url = URL.createObjectURL(e.target.files[0]);
                stickers[index].file = e.target.files[0];
                // stickers[index].nome = file.name;
                setStickers([...stickers]);
            }
        }
    }

    function handleStickerName(e,index) {
        let stickers_temp = stickers;
        stickers_temp[index].nome = e.target.value;
        console.log("stickers_temp: ",stickers_temp);
        setStickers([
            ...stickers_temp
        ]);
    }

    const addTradableProduct = (selectedOption) => {
        setFieldValue('tradable',selectedOption.value);
        setTradableSelected(selectedOption);
    };

    // console.log("errors: ",errors);
    // console.log("values: ",values);

    return (
        <Container>
            <Content>
                <FormProduct
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <HeaderForm>
                        <TitleForm>
                            EDITAR DE PRODUTO
                        </TitleForm>
                    </HeaderForm>

                    <ContentImage>
                            {
                                imagePreview?
                                (
                                    <ContentImageInput for={`imageurl`}>
                                        <ImagePremioCad  className="profile-pic" src={imagePreview}/>
                                    </ContentImageInput>
                                ):
                                (
                                    <ContentImageInputEmpty for={`imageurl`}>
                                        <FaPlus size={40} color={colors.white} />
                                    </ContentImageInputEmpty>
                                )
                            }

                            <ContentInputFile>
                                <InputFormFile
                                    type="file"
                                    name={`imageurl`}
                                    id={`imageurl`}
                                    onChange={(e)=>handleImageChange(e)}
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

                    <ContainerStickers>
                            {
                                stickers.map((sticker,index)=>(
                                    <ContentStikerInput>
                                        <LabelSlotSticker>
                                            {`STICKER SLOT ${sticker.slot}`}
                                        </LabelSlotSticker>
                                        <ContainerInput>
                                            <InputForm
                                                    type="text"
                                                    name={`nome_sticker_${index}`}
                                                    id={`nome_sticker_${index}`}
                                                    className={`nome_sticker_${index}`}
                                                    value={sticker.nome} // We also bind our email value
                                                    onChange={(e)=>handleStickerName(e,index)}
                                            />
                                        </ContainerInput>
                                        <ContentStickers key={index}>
                                            {
                                                sticker.file_url?
                                                (
                                                    <ContentSticker for={`image_sticker_${sticker.slot}`}>
                                                        <ImageSticker  className="profile-pic" src={sticker.file_url}/>
                                                    </ContentSticker>
                                                ):
                                                (
                                                    <ContentStickerEmpty for={`image_sticker_${sticker.slot}`}>
                                                        <FaPlus size={40} color={colors.white} />
                                                    </ContentStickerEmpty>
                                                )
                                            }
                                            <ContentInputFile>
                                                <InputFormFile
                                                    type="file"
                                                    name={`image_sticker_${sticker.slot}`}
                                                    id={`image_sticker_${sticker.slot}`}
                                                    onChange={(e)=>handStickerChange(e,index)}
                                                    // onBlur={handleBlur}
                                                    // touched={touched["doc"]}
                                                    style={{ display: "flex" }}
                                                    // setFieldValue={setFieldValue}
                                                    className="file-upload"
                                                    accept=".png, .gif, .jpeg, .jpg"
                                                    // {...getFieldProps("doc")}
                                                />
                                            </ContentInputFile>
                                            {
                                                errors[`nome_sticker_${index}`]&&
                                                (
                                                    <ErroForm>
                                                        {errors[`nome_sticker_${index}`]}
                                                    </ErroForm>
                                                )
                                            }
                                        </ContentStickers>
                                        <ContentDeleteSticker type="button" onClick={()=>deleteStickerProduct(sticker.slot)}>
                                            {/* <FaRegTrashAlt size={20} color={colors.red_dark} /> */}
                                            RETIRAR
                                        </ContentDeleteSticker>
                                    </ContentStikerInput>
                                ))
                            }
                    </ContainerStickers>

                    {/* name */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Nome do produto:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="name"
                                    value={values.name} // We also bind our email value
                                    {...getFieldProps("name")}
                            />
                            <ErroForm>
                                {touched["name"] && errors["name"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>
                    
                    {/* name_store */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Nome do produto na steam:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="name_store"
                                    id="name_store"
                                    className="name_store"
                                    value={values.name_store} // We also bind our email value
                                    {...getFieldProps("name_store")}
                            />
                            <ErroForm>
                                {touched["name_store"] && errors["name_store"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* price_real */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Valor em Real do produto:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <InputForm
                                    type="number"
                                    name="price_real"
                                    id="price_real"
                                    className="price_real"
                                    value={values.price_real} // We also bind our email value
                                    {...getFieldProps("price_real")}
                            />
                            <ErroForm>
                                {touched["price_real"] && errors["price_real"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>
                    
                    {/* amount */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Quantidade do produto em estoque:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    className="amount"
                                    value={values.amount} // We also bind our email value
                                    {...getFieldProps("amount")}
                            />
                            <ErroForm>
                                {touched["amount"] && errors["amount"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* tradable */}
                    <ContentForm>
                        <ContainerSelectInput>
                            <LabelForm>
                               O produto está comercializável:
                                <InputRequirede>*</InputRequirede>
                            </LabelForm>
                            <Select
                                value={tradableSelected}
                                onChange={addTradableProduct}
                                options={typesTradable}
                            />
                            <ErroForm>
                                {touched["tradable"] && errors["tradable"]}
                            </ErroForm>
                        </ContainerSelectInput>
                    </ContentForm>

                    {/* id_owner_steam */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                ID da Steam do dono do produto:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="id_owner_steam"
                                    id="id_owner_steam"
                                    className="id_owner_steam"
                                    value={values.id_owner_steam} // We also bind our email value
                                    {...getFieldProps("id_owner_steam")}
                            />
                            <ErroForm>
                                {touched["id_owner_steam"] && errors["id_owner_steam"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>
                            
                    {/* class_id */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Class Id do produto na steam:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="class_id"
                                    id="class_id"
                                    className="class_id"
                                    value={values.class_id} // We also bind our email value
                                    {...getFieldProps("class_id")}
                            />
                            <ErroForm>
                                {touched["class_id"] && errors["class_id"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>
                    
                    {/* describe */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Descrição do produto:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="describe"
                                    id="describe"
                                    className="describe"
                                    value={values.describe} // We also bind our email value
                                    {...getFieldProps("describe")}
                            />
                            <ErroForm>
                                {touched["describe"] && errors["describe"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* inspectGameLink */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Link de inspeção no CS:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="inspectGameLink"
                                    id="inspectGameLink"
                                    className="inspectGameLink"
                                    value={values.inspectGameLink} // We also bind our email value
                                    {...getFieldProps("inspectGameLink")}
                            />
                            <ErroForm>
                                {touched["inspectGameLink"] && errors["inspectGameLink"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* exterior */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Desgaste do produto:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="exterior"
                                    id="exterior"
                                    className="exterior"
                                    value={values.exterior} // We also bind our email value
                                    {...getFieldProps("exterior")}
                            />
                            <ErroForm>
                                {touched["exterior"] && errors["exterior"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* type */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Tipo do produto:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="type"
                                    id="type"
                                    className="type"
                                    value={values.type} // We also bind our email value
                                    {...getFieldProps("type")}
                            />
                            <ErroForm>
                                {touched["type"] && errors["type"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* assetid */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Asset Id do produto na Steam:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="assetid"
                                    id="assetid"
                                    className="assetid"
                                    value={values.assetid} // We also bind our email value
                                    {...getFieldProps("assetid")}
                            />
                            <ErroForm>
                                {touched["assetid"] && errors["assetid"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* instanceid */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Instance Id do produto na Steam:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="instanceid"
                                    id="instanceid"
                                    className="instanceid"
                                    value={values.instanceid} // We also bind our email value
                                    {...getFieldProps("instanceid")}
                            />
                            <ErroForm>
                                {touched["instanceid"] && errors["instanceid"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* stickersinfo */}

                    {/* floatvalue */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                               Float do produto:
                            </LabelForm>
                            <InputForm
                                    type="number"
                                    name="floatvalue"
                                    id="floatvalue"
                                    className="floatvalue"
                                    value={values.floatvalue} // We also bind our email value
                                    {...getFieldProps("floatvalue")}
                            />
                            <ErroForm>
                                {touched["floatvalue"] && errors["floatvalue"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* paint */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                               Paint do produto:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="paint"
                                    id="paint"
                                    className="paint"
                                    value={values.paint} // We also bind our email value
                                    {...getFieldProps("paint")}
                            />
                            <ErroForm>
                                {touched["paint"] && errors["paint"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* weapon */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Weapon do produto:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="weapon"
                                    id="weapon"
                                    className="weapon"
                                    value={values.weapon} // We also bind our email value
                                    {...getFieldProps("weapon")}
                            />
                            <ErroForm>
                                {touched["weapon"] && errors["weapon"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* nametag */}
                    <ContentForm>
                        <ContainerInput>
                            <LabelForm>
                                Name Tag do produto:
                            </LabelForm>
                            <InputForm
                                    type="text"
                                    name="nametag"
                                    id="nametag"
                                    className="nametag"
                                    value={values.nametag} // We also bind our email value
                                    {...getFieldProps("nametag")}
                            />
                            <ErroForm>
                                {touched["nametag"] && errors["nametag"]}
                            </ErroForm>
                        </ContainerInput>
                    </ContentForm>

                    {/* button */}
                    <ContainerButton>
                        <ButtonForm type="submit">
                            Editar
                        </ButtonForm>
                    </ContainerButton>

                </FormProduct>
            </Content>
        </Container>
    );
}

export default FormEditProduct;