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
        <svg
          className={css.iconExit}
          width="18"
          height="18"
          viewBox="0 0 32 32"
        >
          <path d="M20.051 23.237h2.499v4.997a3.752 3.752 0 0 1-3.748 3.748H3.748A3.752 3.752 0 0 1 0 28.234V3.748A3.752 3.752 0 0 1 3.748 0h15.054a3.752 3.752 0 0 1 3.748 3.748v4.997h-2.499V3.748a1.25 1.25 0 0 0-1.249-1.249H3.748a1.25 1.25 0 0 0-1.249 1.249v24.486a1.25 1.25 0 0 0 1.249 1.249h15.054a1.25 1.25 0 0 0 1.249-1.249v-4.997zm6.06-13.135-1.767 1.767 2.873 2.874H11.056v2.499h16.161l-2.873 2.873 1.767 1.767L32 15.993l-5.889-5.89z" />
        </svg>
        <span className={textStyle}>Exit</span>
      </button>
    </div>
  );
};

UserExit.propTypes = {
  onClick: PropTypes.func.isRequired,
};
