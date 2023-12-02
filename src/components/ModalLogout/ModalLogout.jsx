import React, { useEffect } from 'react';
import css from './ModalLogout.module.css';
import { ButtonConfirmLogout } from 'components/ButtonConfirmLogout/ButtonConfirmLogout';
import { ButtonCancelLogout } from 'components/ButtonCancelLogout/ButtonCancelLogout';
import PropTypes from 'prop-types';

export const ModalLogout = ({ isOpen, toggleModal, logout }) => {
  const backdropClasses = `${css.backdrop} ${
    !isOpen ? css['backdrop-is-hidden'] : ''
  }`;

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [toggleModal]);

  return (
    <div className={backdropClasses} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <p className={css.modalQuery}>Are you sure you want to logout?</p>
        <div className={css.buttonContainer}>
          <ButtonCancelLogout onClick={toggleModal} />
          <ButtonConfirmLogout onClick={logout} />
        </div>
      </div>
    </div>
  );
};

ModalLogout.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
