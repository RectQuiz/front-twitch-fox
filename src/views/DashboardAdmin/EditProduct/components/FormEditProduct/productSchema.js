
import * as yup from 'yup';

const FILE_SIZE = 1024 * 1024 * 5;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

const productSchema = yup.object().shape({
    id_owner: yup
        .string(),
    class_id: yup
        .string(),
    name: yup
        .string()
        .required('Precisa informar o nome do produto'),
    price_real: yup
        .string()
        .required('Precisa informar o valor real do produto'),
    name_store: yup
        .string()
        .required('Precisa informar o nome do produto na loja'),
    describe: yup
        .string(),
    imageurl: yup
        .mixed()
        // .required("Escolha a imagem do produto")
        .test(
            "fileSize",
            "Arquivo muito grande",
            value => value?(value.size <= FILE_SIZE):true
        )
        .test(
            "fileFormat",
            "Formato de arquivo não suportado",
            value => value?SUPPORTED_FORMATS.includes(value.type):true
        ),
    inspectGameLink: yup
        .string(),
    exterior: yup
        .string(),
    amount: yup
        .number()
        .required('Precisa informar a quantidade em estoque do produto'),
    type: yup
        .string(),
    assetid: yup
        .string(),
    instanceid: yup
        .string(),
    tradable: yup
        .string()
        .required('Precisa informar se o item está vendivel na loja'),
    // stickersinfo: yup
    //     .string(),
    floatvalue: yup
        .string(),
    paint: yup
        .string(),
    weapon: yup
        .string(),
    nametag: yup
        .string()
});

export default productSchema;