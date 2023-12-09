import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/balance/selectors';
import styles from './Balance.module.css';

export function Balance() {
  const balance = useSelector(selectBalance);
  const [currency] = useState('PLN');
  const displayBalance =
    typeof balance === 'number' ? balance.toFixed(2) : '0.00';

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <span className={styles.balance__currency}>{currency}</span>
        {displayBalance}
      </div>
    </div>
  );
}
