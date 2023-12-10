import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';
// import Chart from 'components/Chart/Chart';
// import { useSelector } from 'react-redux';
// import { selectTransactionsData } from 'redux/finance/financeSelectors';

export default function DiagramPage() {
  // const dataToRender = useSelector(selectTransactionsData);
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <NavBalanceCurrency />
      {/* <Chart /> */}
      {/* <selectTransactionsDataChart dataToRender={dataToRender} /> */}
    </BackgroundContainer>
  );
}
