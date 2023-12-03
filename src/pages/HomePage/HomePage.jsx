import css from './HomePage.module.css';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let backgroundStyle = css.background;

  if (isDesktop) {
    backgroundStyle += ` ${css.backgroundDesktop}`;
  } else if (isTablet) {
    backgroundStyle += ` ${css.backgroundTablet}`;
  }

  return (
    <div className={backgroundStyle}>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
    </div>
  );
}
