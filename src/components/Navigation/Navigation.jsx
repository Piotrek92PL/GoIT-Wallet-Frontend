import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';
import styled from 'styled-components';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  &.active {
    font-weight: 700;

    div div {
      background-color: #4a56e2;
    }
  }
`;

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to="/home">
        <div className={styles.navigation__icon_display}>
          <div className={styles.navigation__item}>
            <AiFillHome />
          </div>
          <div className={styles.navigation__item_home}>Home</div>
        </div>
      </Link>
      <Link to="/diagram">
        <div className={styles.navigation__icon_display}>
          <div className={styles.navigation__item}>
            <BiStats />
          </div>
          <div className={styles.navigation__item_stats}>Statistics</div>
        </div>
      </Link>
      <Link to="/currency">
        <div>
          <div className={styles.navigation__item_currency}>
            <PiCurrencyDollarSimpleBold />
          </div>
        </div>
      </Link>
    </div>
  );
};
