import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { Currency } from 'components/Currency/Currency';

export default function CurrencyPage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Currency</title>
      </Helmet>
      <Currency />
    </BackgroundContainer>
  );
}
