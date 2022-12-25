import * as yup from "yup";

const FILE_SIZE = 1024 * 1024 * 5;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const channelSchema = yup.object().shape({
  name: yup.string().required("Precisa informar o nome do canal"),
  password: yup.string().required("Precisa informar a senha do canal"),
  nickname: yup.string().required("Precisa informar o nickname do canal"),
  points: yup.number().required("Precisa informar os pontos iniciais"),
  linkTwitch: yup
    .string()
    .required("Precisa informar o link da Twitch do canal"),
  accessTokenStreamElements: yup.string(),
  IdStreamElements: yup.string(),
  picture: yup
    .mixed()
    .test(
      "fileSize",
      "Arquivo muito grande",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Formato de arquivo não suportado",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  porcetagem_indicacao: yup.number(),
  divisorPoints: yup.number(),
});

export default channelSchema;
