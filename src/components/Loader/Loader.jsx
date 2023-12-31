import styles from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4a56e2"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
