import {React, useState} from 'react'
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Pagination from "react-js-pagination";

export default function Paginate(props) {

    return (
        <div>
             <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={props.page}
                itemsCountPerPage={props.pageSize}
                totalItemsCount={props.totalItem}
                pageRangeDisplayed={5}
                onChange={props.onSelectPage.bind(this)}
            />
        </div>
    )
}
