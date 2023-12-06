import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavCurrency } from 'components/NavCurrency/NavCurrency';

export default function CurrencyPage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Currency</title>
      </Helmet>
      <NavCurrency />
    </BackgroundContainer>
  );
}
