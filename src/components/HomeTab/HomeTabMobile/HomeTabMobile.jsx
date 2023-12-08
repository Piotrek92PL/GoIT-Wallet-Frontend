import transactions from '../transactions.json';
import { MdEdit } from 'react-icons/md';
import './HomeTabMobile.scss';

export default function HomeTabMobile() {
  const res = transactions.data;

  function convertStringToDate(str = '2022-12-01T00:00:00.000Z') {
    return str.split('T')[0].split('-').reverse().join('.');
  }

  return (
    <>
      {res.map(item => {
        const borderColor = item.Expenses ? '#ff6596' : '#24cca7';
        const result = item.Expenses ? '-' : '+';

        return (
          <ul
            key={item.id}
            className={
              result === '+' ? 'mobile-list mobile-list--plus' : 'mobile-list'
            }
            style={{ borderColor: borderColor }}
          >
            <li className="mobile-list_item">
              <span className="mobile-list_category">Data</span>
              <span className="mobile-list_data">
                {convertStringToDate(item.date)}
              </span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Typ</span>
              <span className="mobile-list_data">{result}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Kategoria</span>
              <span className="mobile-list_data">{item.category}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Komentarz</span>
              <span className="mobile-list_data">{item.comment}</span>
            </li>
            <li className="mobile-list_item">
              <span className="mobile-list_category">Kwota</span>
              <span
                className={
                  result === '+'
                    ? 'mobile-list_data mobile-list_data--plus'
                    : 'mobile-list_data mobile-list_data--minus'
                }
              >
                {item.sum}
              </span>
            </li>

            <li className="mobile-list_item">
              <button className="delete-button">Delete</button>
              <button className="edit-button">
                <MdEdit className="icon" size={18} />
                Edit
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
}
