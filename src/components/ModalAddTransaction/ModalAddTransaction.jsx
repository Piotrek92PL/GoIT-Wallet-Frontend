import React from 'react';
import PropTypes from 'prop-types';
import css from './ModalAddTransaction.module.css';

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // <div>
    //   <p>Add Transaction</p>
    //   <button onClick={onClose}>Close</button>
    // </div>
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <button className={css.closeButton} onClick={onClose}>
            x
          </button>
          <p>Add Transaction</p>
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
