import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/transactions/selectors';
import styles from './Balance.module.css';

export function Balance() {
  const balance = useSelector(selectBalance);
  console.log('Balance from selector:', balance);
  const displayBalance = !isNaN(parseFloat(balance))
    ? parseFloat(balance).toFixed(2)
    : '0.00';

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <span className={styles.balance__currency}>PLN</span>
        {displayBalance}
      </div>
    </div>
  );
}
