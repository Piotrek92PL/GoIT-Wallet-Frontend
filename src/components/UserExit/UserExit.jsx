import { useAuth } from 'hooks';
import css from './UserExit.module.css';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

export const UserExit = ({ onClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  let textStyle = css.text;
  let buttonStyle = css.buttonLogout;
  if (isMobile) {
    textStyle = ` ${css.textMobile}`;
    buttonStyle += ` ${css.buttonLogoutMobile}`;
  }

  const { user } = useAuth();

  return (
    <div className={css.container}>
      <p className={css.userEmail}>{user.email}</p>
      <button className={buttonStyle} type="button" onClick={onClick}>
        <svg className={css.iconExit} width="18" height="18">
          <use href="/images/icons-sin-log.svg#icon-exit" />
        </svg>
        <span className={textStyle}>Exit</span>
      </button>
    </div>
  );
};

UserExit.propTypes = {
  onClick: PropTypes.func.isRequired,
};
