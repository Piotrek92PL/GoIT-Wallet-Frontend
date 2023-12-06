import styles from './Navigation.module.css';
import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navigation = ({ onClickCurrency }) => {
  return (
    <div className={styles.navigation}>
      <NavLink to="/home">
        <div className={styles.navigation__icon_display}>
          <div className={styles.navigation__item_blue}>
            <AiFillHome />
          </div>
          <div className={styles.navigation__item_home}>Home</div>
        </div>
      </NavLink>
      <NavLink to="/diagram">
        <div className={styles.navigation__icon_display}>
          <div className={styles.navigation__item}>
            <BiStats />
          </div>
          <div className={styles.navigation__item_stats}>Statistics</div>
        </div>
      </NavLink>
      <NavLink to="/currency" onClick={onClickCurrency}>
        <div className={styles.navigation__item_currency}>
          <PiCurrencyDollarSimpleBold />
        </div>
      </NavLink>
    </div>
  );
};

Navigation.propTypes = {
  onClickCurrency: PropTypes.any,
};
