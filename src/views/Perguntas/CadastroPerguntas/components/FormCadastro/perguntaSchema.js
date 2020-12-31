
import * as yup from 'yup';

const nivelSchema = yup.object().shape({
    titulo: yup
        .string()
        .required('Precisa informar o titulo da pergunta'),
    nivel: yup
        .string()
        .required('Precisa informar o nível da pergunta'),
    categoria: yup
        .string()
        .required('Precisa informar a categoria da pergunta'),
    resposta: yup
        .number()
        .max(4,'Escolha um numero até 4')
        .min(1,'Escolha um numero maior que 0')
        .required('Precisa informar a categoria da pergunta'),
    alternativas: yup
        .array()
        .of(
            yup.object().shape({
                name: yup
                .string()
                .required('Informe o nome da alternativa')
            })
        )
        .min(4,'Informa 4 alternativas')
        .required('Precisa informar todas as alternativas da pergunta')
});

export default nivelSchema;