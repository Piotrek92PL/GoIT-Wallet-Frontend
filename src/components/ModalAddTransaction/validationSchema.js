import * as Yup from 'yup';

const today = new Date();
const todayEnd = new Date(today.setHours(23, 59, 59, 999));

export const transactionValidationSchema = Yup.object({
  amount: Yup.number()
    .required('Required!')
    .positive('Amount must be positive')
    .max(1000000, 'Amount must be less or equal to 1000000'),
  date: Yup.date().required('Required!').max(todayEnd, 'Past or present'),
  type: Yup.string()
    .required('Required!')
    .oneOf(['income', 'expense'], 'Invalid transaction type'),
  comment: Yup.string().nullable(),
  category: Yup.string().required('Required!'),
});
