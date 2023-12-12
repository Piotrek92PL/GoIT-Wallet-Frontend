import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';

import TableChart from 'components/Chart/Table/TableChart';

export default function DiagramPage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <NavBalanceCurrency />

      <TableChart />
    </BackgroundContainer>
  );
}
