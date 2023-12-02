import React from 'react';
import css from './ModalLogout.module.css';
import { ButtonConfirmLogout } from 'components/ButtonConfirmLogout/ButtonConfirmLogout';
import { ButtonCancelLogout } from 'components/ButtonCancelLogout/ButtonCancelLogout';

export const ModalLogout = ({ isOpen, toggleModal, logout }) => {
  const backdropClasses = `${css.backdrop} ${
    !isOpen ? css['backdrop-is-hidden'] : ''
  }`;
  return (
    <div className={backdropClasses}>
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
