
import * as yup from 'yup';

const rewardSchema = yup.object().shape({
    title: yup
        .string()
        .required('Precisa informar o titulo do reward'),
    cost: yup
        .number()
        .required('Precisa informar o custo do reward'),
    is_enabled: yup
        .bool()
        .required('Precisa informar se o reward ficara ativo ou não'),
});

export default rewardSchema;