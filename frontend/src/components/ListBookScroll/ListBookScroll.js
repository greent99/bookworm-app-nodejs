import React from 'react'
import { Col, Row } from 'reactstrap'
import BookCard from '../BookCard'
import './ListBookScroll.css'

export default function ListBookScroll() {

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
    ]

    const renderlistBook = (books) => {
        return books.map((item, index) => {
            return <Col sm="3">
                <BookCard item={item} key={index}></BookCard>
            </Col>
        })
    }

    return (
       <div >
            <Row>
                {renderlistBook(books)}
            </Row>
       </div>
    )
}

