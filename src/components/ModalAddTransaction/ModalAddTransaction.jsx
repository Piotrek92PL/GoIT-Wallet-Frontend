import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import PropTypes from 'prop-types';
import 'react-datetime/css/react-datetime.css';
import css from './ModalAddTransaction.module.css';

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  const [isIncome, setIsIncome] = useState(true);

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handleSliderChange = e => {
    const newValue = e.target.value === '0';
    setIsIncome(newValue);
  };

  const renderInput = (props, openCalendar, closeCalendar) => {
    return (
      <div style={{ position: 'relative' }}>
        <input {...props} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_7_312)">
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
      <div className={css.modal}>
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
            <div className={css.rangeContainer}>
              <span className={css.income}>Income</span>
              <input
                className={css.range}
                type="range"
                min="0"
                max="1"
                step="1"
                value={isIncome ? '0' : '1'}
                onChange={handleSliderChange}
              />
              <span className={css.expense}>Expense</span>
            </div>
            <label className={css.sumLabel}>
              <input
                className={css.sumInput}
                type="number"
                placeholder="0.00"
              />
            </label>
            <label className={css.dateLabel}>
              <Datetime
                value={selectedDate}
                onChange={date => setSelectedDate(date)}
                renderInput={renderInput}
                dateFormat="DD-MM-YYYY"
                timeFormat={false}
              />
            </label>
            <textarea className={css.comment} placeholder="Comment" />
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
