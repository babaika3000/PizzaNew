import React, {FC} from 'react';

import ReactPaginate from "react-paginate";

import styles from './Pagination.module.scss'

type PaginationProp = {
  value:number;
  onChangePage:(page:number)=>void;
}

const Pagination: FC<PaginationProp> = ({onChangePage,value}) => {
  return (
    <ReactPaginate
      className={styles.main}
      breakLabel="..."
      nextLabel=" >"
      previousLabel="< "
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={3}
      forcePage={value -1}
    />
  )
};

export default Pagination;
