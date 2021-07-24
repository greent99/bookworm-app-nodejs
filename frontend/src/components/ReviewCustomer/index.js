import {React, useState} from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import ListReview from '../ListReview';

export default function ReviewCustomer() {

    const [isOpenSort, setOpenSort] = useState(false)
    const toggle1 = () => setOpenSort(!isOpenSort);

    const [isOpenPaginate, setOpenPaginate] = useState(false);
    const toggle2 = () => setOpenPaginate(!isOpenPaginate);

    return (
        <div class='border' style={{backgroundColor: '#FDFAFA'}}>
            <div style={{marginLeft: 30, marginRight: 30, marginTop: 30}}>
                <div class='d-flex justify-content-start'>
                    <h5>Customer Reviews</h5>
                </div>
                <div class='d-flex justify-content-start'>
                    <h4>4.6 Star</h4>
                </div>
                <div class='d-flex justify-content-start'>
                    <p class='text-primary' style={{marginRight: 15}}>(3.134)</p>
                    <p class='text-primary'>5 star(200)</p>
                    <p class='text-primary'> | 4 star(100)</p>
                    <p class='text-primary'> | 3 star(200)</p>
                    <p class='text-primary'> | 2 star(200)</p>
                    <p class='text-primary'> | 1 star(200)</p>
                </div>
                <div class='d-flex justify-content-between'>
                    <p class='text-primary'>Showing 1-12 of 3136 reviews</p>
                    <div>
                        <ButtonDropdown isOpen={isOpenSort} toggle={toggle1} style={{marginRight: 10}}>
                            <DropdownToggle caret size="sm">
                                Sort By Date
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Sort by date: newest to oldest</DropdownItem>
                                <DropdownItem>Sort by date: oldest to newest</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>

                        <ButtonDropdown isOpen={isOpenPaginate} toggle={toggle2}>
                            <DropdownToggle caret size="sm">
                                Show 20
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Show 20</DropdownItem>
                                <DropdownItem>Show 15</DropdownItem>
                                <DropdownItem>show 10</DropdownItem>
                                <DropdownItem>Show 5</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </div>
                <div>
                    <ListReview />
                </div>
            </div>
        </div>
    )
}
