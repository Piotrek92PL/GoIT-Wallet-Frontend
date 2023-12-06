import React from 'react';
import css from './Balance.module.css';

export function Balance() {
  return (
    <div className={css.balanceContainer}>
      <p className={css.balance}>Your balance</p>
      <p className={css.deposit}>₴ 24 000.00</p>
    </div>
  );
}
