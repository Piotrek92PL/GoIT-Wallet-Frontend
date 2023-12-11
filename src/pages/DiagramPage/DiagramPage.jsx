import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';
import Chart from 'components/Chart/Chart';
import TableChart from 'components/Chart/Table/TableChart';
import css from './DiagramPage.module.css';
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
      <div className={css.container}>
        <p className={css.diagramTitle}>Statistics</p>
        <div className={css.diagramWrap}>
          <Chart />
          <TableChart />
        </div>
      </div>
      {/* <selectTransactionsDataChart dataToRender={dataToRender} /> */}
    </BackgroundContainer>
  );
}
