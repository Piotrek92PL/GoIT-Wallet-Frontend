import css from './HomePage.module.css';
import { Helmet } from 'react-helmet';

export default function HomePage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
    </div>
  );
}
