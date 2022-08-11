import React from 'react';

import ReactPaginate from "react-paginate";

import styles from './Pagination.module.scss'

const Pagination = () => {
    return       (
      <ReactPaginate
className={styles.main}
            breakLabel="..."
            nextLabel=" >"
                        previousLabel="< "

            onPageChange={()=>{}}
            pageRangeDisplayed={5}
            pageCount={4}
            renderOnZeroPageCount={null}
        />
        )
};

export default Pagination;