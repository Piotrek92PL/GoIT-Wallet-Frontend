import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';

export default function HomePage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
    </BackgroundContainer>
  );
}
