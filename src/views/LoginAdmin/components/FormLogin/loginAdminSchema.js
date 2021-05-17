
import * as yup from 'yup';

const nivelSchema = yup.object().shape({
    nickname: yup
        .string()
        .required(),
    password: yup
        .string()
        .required(),
});

export default nivelSchema;