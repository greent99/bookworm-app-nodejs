import {React, useState} from 'react'
import './ShopContent.css'
import '../../App.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import BookCard from '../BookCard';
import Paginate from '../Paginate/Paginate';

export default function ShopContent(props) {

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
    const listSort = [
        {
            name: 'Sort by on sale',
            code: 'onSale'
        },
        {
            name: 'Sort by popularity',
            code: 'popular'
        },
        {
            name: 'Sort by price low To high',
            code: 'priceAsc'
        },
        {
            name: 'Sort by price high to low',
            code: 'priceDesc'
        },
    ]

    const listPaginate = [20, 15, 10, 5]

    const renderlistBook = (books) => {
        return books.map((item, index) => {
            return <Col sm="3">
                <BookCard item={item} key={index}></BookCard>
            </Col>
        })
    }

    const renderListSort = (listSort, props) => {
        return listSort.map(item => {
            return <DropdownItem onClick={() => {
                props.onSelectSort(item.code)
            }}>{item.name}</DropdownItem>
        })
    }

    const renderListPaginate = (listPaginate, props) => {
        return listPaginate.map(item => {
            return <DropdownItem onClick={() => {
                props.onSelectPageSize(item)
            }}>Show {item}</DropdownItem>
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
                            {renderListSort(listSort, props)}
                        </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown isOpen={isOpenPaginate} toggle={toggle2}>
                        <DropdownToggle caret size="sm">
                            Show 20
                        </DropdownToggle>
                        <DropdownMenu>
                            {renderListPaginate(listPaginate,props)}
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
