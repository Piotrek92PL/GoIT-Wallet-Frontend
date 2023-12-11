import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

export const Pagination = ({
  transactionsPerPage,
  totalTransactions,
  paginate,
}) => {
  const pageCount = Math.ceil(totalTransactions / transactionsPerPage);

  const handlePageClick = event => {
    paginate(event.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={' ← '}
      nextLabel={' → '}
      renderOnZeroPageCount={null}
      containerClassName={css.pagination}
      previousLinkClassName={css.paginationLink}
      nextLinkClassName={css.paginationLink}
      disabledClassName={css.paginationLinkDisabled}
      activeClassName={css.paginationLinkActive}
    />
  );
};

Pagination.propTypes = {
  transactionsPerPage: PropTypes.number,
  totalTransactions: PropTypes.number,
  paginate: PropTypes.func,
};
