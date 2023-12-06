import React from 'react';

import css from './NavCurrency.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { Currency } from 'components/Currency/Currency';

export const NavCurrency = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <Currency />
    </div>
  );
};
