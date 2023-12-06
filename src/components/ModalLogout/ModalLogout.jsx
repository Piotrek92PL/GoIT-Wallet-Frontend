import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './ModalLogout.module.css';
import { ButtonConfirmLogout } from 'components/ButtonConfirmLogout/ButtonConfirmLogout';
import { ButtonCancelLogout } from 'components/ButtonCancelLogout/ButtonCancelLogout';
import PropTypes from 'prop-types';

export const ModalLogout = ({ isOpen, toggleModal, logout }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTabletDesktop = useMediaQuery({ minWidth: 769 });

  let backdropStyle = css.backdrop;
  let modalStyle = css.modal;

  if (isTabletDesktop) {
    backdropStyle += ` ${css.backdropTabletDesktop}`;
  } else if (isMobile) {
    backdropStyle += ` ${css.backdropMobile}`;
    modalStyle += ` ${css.modalMobile}`;
  }

  const backdropClasses = `${backdropStyle} ${
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
      <div className={modalStyle}>
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
