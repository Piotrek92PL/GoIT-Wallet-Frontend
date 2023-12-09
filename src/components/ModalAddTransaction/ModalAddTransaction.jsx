import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import PropTypes from 'prop-types';
import 'react-datetime/css/react-datetime.css';
import css from './ModalAddTransaction.module.css';
import { selectCategories } from 'redux/categories/selectors';
import { useFormik } from 'formik';
import { transactionValidationSchema } from './validationSchema';
import { useDispatch } from 'react-redux';
import { addTransaction } from 'redux/transactions/operations';

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [isIncome, setIsIncome] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');

  const formik = useFormik({
    initialValues: {
      type: '',
      category: '',
      amount: '',
      date: new Date(),
      comment: '',
    },
    validationSchema: transactionValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const transaction = {
        type: isIncome ? 'income' : 'expense',
        category: isIncome ? '1' : values.category,
        amount: values.amount,
        date: values.date,
        comment: values.comment,
      };

      dispatch(addTransaction(transaction));
      resetForm();
      onClose();
    },
  });

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    if (isIncome) {
      formik.setFieldValue('category', '1');
      setSelectedCategory('1');
    } else {
      formik.setFieldValue('category', '');
      setSelectedCategory('');
    }
  }, [isIncome, formik]);

  const handleCheckboxChange = e => {
    setIsIncome(e.target.checked);
  };

  const handleCategoryChange = e => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    formik.setFieldValue('category', newCategory);
  };

  //income/expense checkbox
  const toggleButton = (
    <label className={css.toggleButtonLabel}>
      <input
        type="checkbox"
        checked={isIncome}
        onChange={handleCheckboxChange}
        className={css.toggleButtonInput}
        name="type"
      />
      <div className={css.toggleButton}>
        {isIncome ? (
          <svg
            className={css.toggleButtonIncome}
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
          >
            <g filter="url(#filter0_d_19664_746)">
              <circle cx="37" cy="31" r="22" fill="#24CCA7" />
            </g>
            <path d="M37 21V41" stroke="white" strokeWidth="2" />
            <path d="M27 31L47 31" stroke="white" strokeWidth="2" />
            <defs>
              <filter
                id="filter0_d_19664_746"
                x="0"
                y="0"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.141176 0 0 0 0 0.8 0 0 0 0 0.654902 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_19664_746"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_19664_746"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        ) : (
          <svg
            className={css.toggleButtonExpense}
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
          >
            <g filter="url(#filter0_d_19664_1473)">
              <circle cx="37" cy="31" r="22" fill="#FF6596" />
            </g>
            <path d="M27 31L47 31" stroke="white" strokeWidth="2" />
            <defs>
              <filter
                id="filter0_d_19664_1473"
                x="0"
                y="0"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.395833 0 0 0 0 0.589401 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_19664_1473"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_19664_1473"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
      </div>
    </label>
  );

  //calendar
  const renderInput = props => {
    return (
      <div className={css.dateContainer} style={{ position: 'relative' }}>
        <input className={css.dateInput} {...props} />
        <svg
          className={css.calendarIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_7_312)">
            <path
              d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
              fill="#4A56E2"
            />
          </g>
          <defs>
            <clipPath id="clip0_7_312">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <div
        className={isIncome ? css.modal : `${css.modal} ${css.modalExpense}`}
      >
        <div className={css.modalContent}>
          <button className={css.closeButton} onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path d="M1 1L17 17" stroke="black" />
              <path d="M1 17L17 0.999999" stroke="black" />
            </svg>
          </button>
          <p className={css.headline}>Add Transaction</p>
          <form className={css.form}>
            <div
              className={
                isIncome
                  ? css.rangeContainer
                  : `${css.rangeContainer} ${css.rangeContainerExpense}`
              }
            >
              <span
                className={
                  isIncome ? css.income : `${css.income} ${css.nohighlight}`
                }
              >
                Income
              </span>
              <span>{toggleButton}</span>
              <span
                className={
                  isIncome ? `${css.expense} ${css.nohighlight}` : css.expense
                }
              >
                Expense
              </span>
            </div>
            {!isIncome ? (
              <div className={css.categoryWrapper}>
                <select
                  className={`${css.category} ${
                    formik.touched.category && formik.errors.category
                      ? css.error
                      : ''
                  }`}
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  onBlur={formik.handleBlur}
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {formik.touched.category && formik.errors.category && (
                  <div className={css.formikMessageRequired}>
                    {formik.errors.category}
                  </div>
                )}
              </div>
            ) : null}
            <label className={css.sumLabel}>
              <input
                className={`${css.sumInput} ${
                  formik.touched.amount && formik.errors.amount ? css.error : ''
                }`}
                type="number"
                placeholder="0.00"
                {...formik.getFieldProps('amount')}
              />
              {formik.touched.amount && formik.errors.amount && (
                <div className={css.formikMessage}>{formik.errors.amount}</div>
              )}
            </label>
            <label className={css.dateLabel}>
              <Datetime
                value={selectedDate}
                onChange={date => {
                  setSelectedDate(date);
                  formik.setFieldValue('date', date);
                }}
                renderInput={renderInput}
                dateFormat="DD-MM-YYYY"
                timeFormat={false}
                name="date"
              />
              {formik.touched.date && formik.errors.date && (
                <div className={css.formikMessage}>{formik.errors.date}</div>
              )}
            </label>
            <textarea
              className={css.comment}
              placeholder="Comment"
              {...formik.getFieldProps('comment')}
            />
            <button className={css.addBtn} type="submit">
              Add
            </button>
            <button className={css.closeBtn} onClick={onClose} type="button">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ModalAddTransaction.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAddTransaction;
