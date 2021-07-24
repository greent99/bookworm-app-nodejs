import React from 'react'
import "./BookCard.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import bookimg from '../../book.jpg'

export default function BookCard(props) {
    return (
        (
            <div>
                <Card>
                    <CardImg top width="100%"  src={bookimg} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{props.item.book_title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.item.author_id}</CardSubtitle>
                        <CardFooter>{props.item.book_price} đ</CardFooter>
                    </CardBody>
                </Card>
            </div>
        )
    )
}

