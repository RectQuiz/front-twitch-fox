
import * as yup from 'yup';

const rewardSchema = yup.object().shape({
    nickname: yup
        .string()
        .required('Precisa informar o nickname do usuário'),
    pontos: yup
        .number()
        .required('Precisa informar a quantidade de pontos'),
});

export default rewardSchema;