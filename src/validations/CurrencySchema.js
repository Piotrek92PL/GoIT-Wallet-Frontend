import * as yup from 'yup';

const CurrencySchema = yup.array().of(
  yup.object().shape({
    code: yup.string().required('Wrong fetched date format. code is required'),
    ask: yup.number().required('Wrong fetched date format. ask is required'),
    bid: yup.number().required('Wrong fetched date format. bid is required'),
    currency: yup.string(),
  })
);

export default CurrencySchema;