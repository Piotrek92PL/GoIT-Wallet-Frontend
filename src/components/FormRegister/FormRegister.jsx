import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './FormRegister.module.css';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { ButtonAuth } from 'components/ButtonAuth/ButtonAuth';
import { LinkAuth } from 'components/LinkAuth/LinkAuth';
import { WalletWithIcon } from 'components/WalletWithIcon/WalletWithIcon';

export const FormRegister = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  return (
    <div className={css.container}>
      <WalletWithIcon />
      <form className={css.form}>
        <label htmlFor="email" className={css.label}>
          <input
            id="email"
            placeholder="E-mail"
            className={`${css.input} ${
              formik.touched.email && formik.errors.email ? css.error : ''
            }`}
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={css.formikMessage}>{formik.errors.email}</div>
          ) : null}
        </label>
        <label htmlFor="password" className={css.label}>
          <input
            id="password"
            placeholder="Password"
            className={`${css.input}  ${
              formik.touched.password && formik.errors.password ? css.error : ''
            }`}
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={css.formikMessage}>{formik.errors.password}</div>
          ) : null}
        </label>

        <label htmlFor="name" className={css.label}>
          <input
            id="name"
            placeholder="First name"
            className={`${css.input} ${
              formik.touched.name && formik.errors.name ? css.error : ''
            }`}
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={css.formikMessage}>{formik.errors.name}</div>
          ) : null}
        </label>
        <ButtonAuth onClick={formik.handleSubmit} content="Register" />
      </form>
      <LinkAuth to="/login" content="Log in" />
    </div>
  );
};
