import React from 'react';
import PropTypes from 'prop-types';

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      <p>Add Transaction</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

ModalAddTransaction.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalAddTransaction;
