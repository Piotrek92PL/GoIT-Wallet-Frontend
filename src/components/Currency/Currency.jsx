import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrency } from '../../redux/currency/thunk';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsError,
  selectCurrency,
  selectLastFetchDate,
} from '../../redux/currency/selectors';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Currency.module.scss';

const Currency = () => {
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const lastFetchDate = useSelector(selectLastFetchDate);

  useEffect(() => {
    if (!currency.length) {
      dispatch(fetchCurrency());
    } else {
      const timeDiff = Date.now() - lastFetchDate;
      if (timeDiff > 1000 * 60 * 60) {
        dispatch(fetchCurrency());
      }
    }
  }, [currency, dispatch, lastFetchDate]);

  return (
    <>
      {isError && <p>{isError[0]}</p>}
      <div className={styles.Currency__container}>
        <div className={styles.Currency__bgGraph} />
        {isLoading && (
          <div className={styles.Currency__spinnerContainer}>
            <CircularProgress className={styles.Currency__spinner} />
          </div>
        )}

        {!isLoading && !isError && (
          <table className={styles.Currency__table}>
            <thead>
              <tr>
                <th>Currency</th>
                <th data-type="bid">Purchase</th>
                <th data-type="ask">Sale</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {currency?.map(currency => (
                <tr
                  key={currency.code}
                  onClick={event =>
                    event.currentTarget.classList.toggle(
                      styles.Currency__row_selected
                    )
                  }
                >
                  <td>{currency.code}</td>
                  <td data-type="bid">{currency.bid.toFixed(4)}</td>
                  <td data-type="ask">{currency.ask.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Currency;
