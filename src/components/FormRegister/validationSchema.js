import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 25 characters')
    .required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  password: Yup.string().min(7, 'Minimum 7 characters').required('Required!'),
});
