import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 25 characters')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .matches(/^\+\d{1,2} \d{3} \d{3} \d{3}$/, 'Is invalid. Expected ....')
    .required('This field is required'),
});
