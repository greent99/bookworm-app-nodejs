import React from 'react'
import "./BookCard.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';
import bookimg from '../../book.jpg'
import { Link } from 'react-router-dom';

export default function BookCard(props) {
    const url_detail = `/book/${props.item.id}`
    return (
        (
            <div style={{height: "100%"}}>
                <Card style={{height: "100%"}}>
                    <CardImg top src={bookimg} alt="Card image cap" />
                    
                    <CardBody >
                        <a href={url_detail} class="stretched-link"></a>
                        <CardTitle tag="h5">{props.item.book_title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.item.author.author_name}</CardSubtitle>
                        <CardFooter>{props.item.book_price} đ</CardFooter>
                    </CardBody>
                </Card>
            </div>
        )
    )
}

