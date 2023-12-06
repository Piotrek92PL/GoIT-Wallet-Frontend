import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';

export default function HomePage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
      <NavBalanceCurrency />
    </BackgroundContainer>
  );
}
