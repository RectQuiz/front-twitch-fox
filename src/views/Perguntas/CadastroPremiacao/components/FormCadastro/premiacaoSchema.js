
import * as yup from 'yup';

const FILE_SIZE = 1024 * 1024 * 5;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

const nivelSchema = yup.object().shape({
    titulo: yup
        .string()
        .required('Precisa informar o titulo da pergunta'),
    nivel: yup
        .string()
        .required('Precisa informar o nível da pergunta'),
    valor: yup
        .number()
        .required('Precisa informar o valor do premio'),
    indice: yup
        .number()
        .required('Precisa informar o indice do premio'),
    image_premio: yup
        .mixed()
        .required("Escolha a imagem do prêmio")
        .test(
            "fileSize",
            "Arquivo muito grande",
            value => value && (value.size <= FILE_SIZE)
        )
        .test(
            "fileFormat",
            "Formato de arquivo não suportado",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        )
});

export default nivelSchema;