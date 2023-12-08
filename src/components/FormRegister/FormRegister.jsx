import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './FormRegister.module.css';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { ButtonAuth } from 'components/ButtonAuth/ButtonAuth';
import { LinkAuth } from 'components/LinkAuth/LinkAuth';
import { WalletWithIcon } from 'components/WalletWithIcon/WalletWithIcon';
import { toast } from 'react-toastify';

export const FormRegister = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
  } else if (isMobile) {
    containerStyle += ` ${css.mobile}`;
  }

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const { email, password } = values;
      dispatch(register({ email, password }))
        .unwrap()
        .then(() => navigate('/home'))
        .catch(rejectedValueOrSerializedError => {
          toast.error(rejectedValueOrSerializedError);
        });
    },
  });

  return (
    <div className={containerStyle}>
      <WalletWithIcon />
      <form className={css.form} onSubmit={formik.handleSubmit}>
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
          <svg
            className={css.iconInput}
            width="24"
            height="24"
            viewBox="0 0 33 32"
          >
            <path d="M27.333 5.333H6A2.663 2.663 0 0 0 3.347 8l-.013 16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667V8c0-1.467-1.2-2.667-2.667-2.667zm0 5.334-10.667 6.667-10.667-6.667V8l10.667 6.667L27.333 8v2.667z" />
          </svg>
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
            type={passwordShown ? 'text' : 'password'}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          <svg
            className={css.iconInput}
            width="24"
            height="24"
            viewBox="0 0 33 32"
          >
            <path d="M24.667 10.667h-1.333V8c0-3.68-2.987-6.667-6.667-6.667S10 4.32 10 8v2.667H8.667A2.675 2.675 0 0 0 6 13.334v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667V13.334c0-1.467-1.2-2.667-2.667-2.667zm-8 12C15.2 22.667 14 21.467 14 20s1.2-2.667 2.667-2.667c1.467 0 2.667 1.2 2.667 2.667s-1.2 2.667-2.667 2.667zm4.133-12h-8.267V8c0-2.28 1.853-4.133 4.133-4.133S20.799 5.72 20.799 8v2.667z" />
          </svg>
          <button
            className={css.buttonPassword}
            type="button"
            onClick={togglePasswordVisibility}
          >
            {passwordShown ? (
              <svg width="20" height="17" fill="#bdbdbd" viewBox="0 0 16 16">
                <path d="M16 8s-3 5.5-8 5.5S0 8 0 8s3-5.5 8-5.5S16 8 16 8zm-8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              </svg>
            ) : (
              <svg width="20" height="17" fill="#bdbdbd" viewBox="0 0 16 16">
                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            )}
          </button>
          {formik.touched.password && formik.errors.password ? (
            <div className={css.formikMessage}>{formik.errors.password}</div>
          ) : null}
        </label>
        <label htmlFor="passwordConfirm" className={css.label}>
          <input
            id="passwordConfirm"
            placeholder="Confirm password"
            className={`${css.input}  ${
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
                ? css.error
                : ''
            }`}
            type={passwordShown ? 'text' : 'password'}
            name="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
          />
          <svg
            className={css.iconInput}
            width="24"
            height="24"
            viewBox="0 0 33 32"
          >
            <path d="M24.667 10.667h-1.333V8c0-3.68-2.987-6.667-6.667-6.667S10 4.32 10 8v2.667H8.667A2.675 2.675 0 0 0 6 13.334v13.333c0 1.467 1.2 2.667 2.667 2.667h16c1.467 0 2.667-1.2 2.667-2.667V13.334c0-1.467-1.2-2.667-2.667-2.667zm-8 12C15.2 22.667 14 21.467 14 20s1.2-2.667 2.667-2.667c1.467 0 2.667 1.2 2.667 2.667s-1.2 2.667-2.667 2.667zm4.133-12h-8.267V8c0-2.28 1.853-4.133 4.133-4.133S20.799 5.72 20.799 8v2.667z" />
          </svg>
          <button
            className={css.buttonPassword}
            type="button"
            onClick={togglePasswordVisibility}
          >
            {passwordShown ? (
              <svg width="20" height="17" fill="#bdbdbd" viewBox="0 0 16 16">
                <path d="M16 8s-3 5.5-8 5.5S0 8 0 8s3-5.5 8-5.5S16 8 16 8zm-8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              </svg>
            ) : (
              <svg width="20" height="17" fill="#bdbdbd" viewBox="0 0 16 16">
                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            )}
          </button>
          <div className={css.line}></div>
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <div className={css.formikMessage}>
              {formik.errors.passwordConfirm}
            </div>
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
          <svg
            className={css.iconInput}
            width="24"
            height="24"
            viewBox="0 0 33 32"
          >
            <path d="M4.667 6.667v18.667a2.666 2.666 0 0 0 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667V6.667C28.668 5.2 27.468 4 26.001 4H7.334c-1.48 0-2.667 1.2-2.667 2.667zm16 5.333c0 2.213-1.787 4-4 4s-4-1.787-4-4 1.787-4 4-4 4 1.787 4 4zm-12 10.667c0-2.667 5.333-4.133 8-4.133s8 1.467 8 4.133V24h-16v-1.333z" />
          </svg>
          {formik.touched.name && formik.errors.name ? (
            <div className={css.formikMessage}>{formik.errors.name}</div>
          ) : null}
        </label>
        <ButtonAuth
          content="Register"
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
      <LinkAuth to="/login" content="Log in" />
    </div>
  );
};
