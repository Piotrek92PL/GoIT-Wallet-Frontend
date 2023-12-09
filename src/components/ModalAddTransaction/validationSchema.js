import * as Yup from 'yup';

export const transactionValidationSchema = Yup.object({
  amount: Yup.number()
    .required('Required!')
    .positive('Amount must be positive')
    .max(1000000, 'Amount must be less or equal to 1000000'),
  date: Yup.date()
    .required('Required!')
    .max(new Date(), 'Date cannot be in the future'),
  type: Yup.string()
    .required('Required!')
    .oneOf(['income', 'expense'], 'Invalid transaction type'),
  comment: Yup.string().nullable(),
  category: Yup.string().required('Required!'),
});
