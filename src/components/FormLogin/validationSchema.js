import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required!'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^da-zA-Z]).{6,12}$/,
      '6-12 chars, incl. uppercase, number & symbol'
    )
    .required('Required!'),
});
