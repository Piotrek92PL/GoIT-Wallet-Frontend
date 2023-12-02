import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './Header.module.css';
import { WalletWithIcon } from 'components/WalletWithIcon/WalletWithIcon';
import { UserExit } from 'components/UserExit/UserExit';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const logout = () => {
    handleToggleModal();
    dispatch(logOut());
  };

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
  return (
    <div className={css.header}>
      <div className={containerStyle}>
        <WalletWithIcon />
        <UserExit onClick={handleToggleModal} />
        <ModalLogout
          isOpen={isModalOpen}
          toggleModal={handleToggleModal}
          logout={logout}
        />
      </div>
    </div>
  );
};
