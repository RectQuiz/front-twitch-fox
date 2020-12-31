
import * as yup from 'yup';

const nivelSchema = yup.object().shape({
    name: yup
        .string()
        .required(),
    number: yup
        .number()
        .positive()
        .integer()
        .required(),
});

export default nivelSchema;