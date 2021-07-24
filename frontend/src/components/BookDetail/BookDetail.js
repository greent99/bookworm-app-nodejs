import React from 'react'
import './BookDetail.css'
import '../../index.css'
import { Col, Row, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle } from 'reactstrap'
import BookDetailTitle from '../BookDetailTitle/BookDetailTitle'
import ReviewCustomer from '../ReviewCustomer'
import ReviewForm from '../ReviewForm'

export default function BookDetail() {
    return (
        <div class='container' style={{marginTop: 50}}>
            <div class='d-flex justify-content-start'>
                <h3>Category Name</h3>
            </div>
            <hr></hr>
            <div>
                <Row>
                    <Col sm='8'>
                        <BookDetailTitle />
                    </Col>
                        <Col>
                            <Card class='card-body'>
                                <CardHeader>$29.99</CardHeader>
                                <CardBody class='d-flex flex-column justify-content-center '>
                                    <CardTitle tag="h5">Quantity</CardTitle>
                                    <div  class='d-flex flex-row justify-content-around align-items-center'>
                                        <Button size='lg'>+</Button>
                                        <h5>1</h5>
                                        <Button size='lg'>-</Button>
                                    </div>
                                    <Button style={{width: '75%', marginTop: 10}} size='lg'>Add to cart</Button>
                                </CardBody>
                                <CardFooter>Book Worm</CardFooter>
                            </Card>
                        </Col>
                </Row>
            </div>
            <div style={{marginTop: 50}}>
                <Row>
                    <Col sm='8'>
                        <ReviewCustomer />
                    </Col>
                    <Col>
                        <ReviewForm />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
