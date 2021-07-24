import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function Paginate() {
    return (
        <div>
             <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
             </Pagination>
        </div>
    )
}
