import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(25, 'Maximum 25 characters')
    .required('Required!'),
  email: Yup.string().email('Invalid email format').required('Required!'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^da-zA-Z]).{6,12}$/,
      '6-12 chars, incl. uppercase, number & symbol'
    )
    .required('Required!'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required!'),
});
