import {React, useState} from 'react'
import './ShopContent.css'
import '../../App.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import BookCard from '../BookCard';
import Paginate from '../Paginate/Paginate';

export default function ShopContent() {

    const [isOpenSort, setOpenSort] = useState(false);
    const toggle1 = () => setOpenSort(!isOpenSort);

    const [isOpenPaginate, setOpenPaginate] = useState(false);
    const toggle2 = () => setOpenPaginate(!isOpenPaginate);

    const books = [
        {
            id: 1,
            image: "",
            title: "Book Title 1",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 2,
            image: "",
            title: "Book Title 2",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 3,
            image: "",
            title: "Book Title 3",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 3,
            image: "",
            title: "Book Title 3",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 1,
            image: "",
            title: "Book Title 1",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 2,
            image: "",
            title: "Book Title 2",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 3,
            image: "",
            title: "Book Title 3",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 3,
            image: "",
            title: "Book Title 3",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 1,
            image: "",
            title: "Book Title 1",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 2,
            image: "",
            title: "Book Title 2",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 3,
            image: "",
            title: "Book Title 3",
            author: 'Author Name',
            price: 50000
        },
        {
            id: 3,
            image: "",
            title: "Book Title 3",
            author: 'Author Name',
            price: 50000
        },
    ]

    const renderlistBook = (books) => {
        return books.map((item, index) => {
            return <Col sm="3">
                <BookCard item={item} key={index}></BookCard>
            </Col>
        })
    }

    return (
        <div>
            <div class='shop-content-head'>
                <div class='text'>
                    <p >Showing 1-12 of 126 books</p>
                </div>
                <div>
                    <ButtonDropdown isOpen={isOpenSort} toggle={toggle1} style={{marginRight: 10}}>
                        <DropdownToggle caret size="sm">
                            Sort By On Sale
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Sort by on sale</DropdownItem>
                            <DropdownItem>Sort by popularity</DropdownItem>
                            <DropdownItem>Sort by price low To high</DropdownItem>
                            <DropdownItem>Sort by price high to low</DropdownItem>
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
                <Row>
                    {renderlistBook(books)}
                </Row>
            </div>
            <div class='center-div'>
                <Paginate />
            </div>
        </div>
           

    )
}
