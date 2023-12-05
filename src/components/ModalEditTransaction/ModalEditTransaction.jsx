import React from 'react';
import PropTypes from 'prop-types';

export const ModalEditTransaction = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      <p>Edit Transaction</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

ModalEditTransaction.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalEditTransaction;
