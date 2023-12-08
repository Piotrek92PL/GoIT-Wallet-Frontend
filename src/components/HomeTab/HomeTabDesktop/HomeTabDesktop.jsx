import transactions from '../transactions.json';
import { MdEdit } from 'react-icons/md';
import './HomeTabDesktop.scss';

function convertStringToDate(str = '2022-12-01T00:00:00.000Z') {
  return str.split('T')[0].split('-').reverse().join('.');
}

const tableHeadData = ['Date', 'Type', 'Category', 'Comment', 'Sum'];

export default function HomeTabDesktop() {
  const res = transactions.data;

  return (
    <>
      <table className={'table'}>
        <thead className={'table-head'}>
          <tr className={'table-head_row'}>
            {tableHeadData.map(head => (
              <th className={'table-head_data'} key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={'table-body'}>
          {res.map(item => {
            const result = item.Expenses ? '-' : '+';

            return (
              <tr key={item.id} className={'table-body_row'}>
                <td className={'table-body_data'}>
                  {convertStringToDate(item.date)}
                </td>
                <td className={'table-body_data'}>{result}</td>
                <td className={'table-body_data'}>{item.category}</td>
                <td className={'table-body_data'}>{item.comment}</td>
                <td
                  className={
                    result === '+'
                      ? 'table-body_data table-body_data--plus'
                      : 'table-body_data table-body_data--minus'
                  }
                >
                  {item.sum}
                </td>
                <td>
                  <button className={'buttonEdit'}>
                    <MdEdit size={24} />
                  </button>
                </td>
                <td>
                  <button className={'button'}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
