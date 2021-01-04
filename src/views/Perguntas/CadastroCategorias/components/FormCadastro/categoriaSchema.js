
import * as yup from 'yup';

const categoriaSchema = yup.object().shape({
    name: yup
        .string()
        .required()
});

export default categoriaSchema;