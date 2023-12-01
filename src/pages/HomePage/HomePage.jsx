import css from './HomePage.module.css';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let containerStyle = css.container;

  if (isDesktop) {
    containerStyle += ` ${css.desktop}`;
  } else if (isTablet) {
    containerStyle += ` ${css.tablet}`;
  } else if (isMobile) {
    containerStyle += ` ${css.mobile}`;
  }

  return (
    <div className={containerStyle}>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
    </div>
  );
}
