import React from 'react'
import { Col, Row, Button, Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap'
import './Cart.css'
import bookimg from '../../book.jpg'

export default function Cart() {
    return (
        <div class='container' style={{marginTop: 50}}>
            <div class='d-flex justify-content-start'>
                <h5>Your cart: 3 items</h5>
            </div>
            <hr></hr>
            <div>
                <Row>
                    <Col sm='8'>
                        <table class="table ">
                            <thead>
                                <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class='d-flex justify-content-start'>
                                        <img  height='100'  src={bookimg} alt="Card image cap"/>
                                        <div class='d-flex align-items-center justify-content-center flex-column'>
                                            <h6 class='text-primary'>Book Title</h6>
                                            <p class='text-primary'>Author name</p>
                                        </div>
                                    </th>
                                    <td>
                                        22.29$
                                    </td>
                                    <td>
                                        <div class='d-flex flex-row justify-content-around align-items-center' >
                                            <Button size='sm'>+</Button>
                                            <h5>1</h5>
                                            <Button size='sm'>-</Button>
                                        </div>
                                    </td>
                                    <td>59.98$</td>
                                </tr>
                                <tr>
                                    <th class='d-flex justify-content-start'>
                                        <img  height='100'  src={bookimg} alt="Card image cap"/>
                                        <div class='d-flex align-items-center justify-content-center flex-column'>
                                            <h6 class='text-primary'>Book Title</h6>
                                            <p class='text-primary'>Author name</p>
                                        </div>
                                    </th>
                                    <td>
                                        22.29$
                                    </td>
                                    <td>
                                        <div class='d-flex flex-row justify-content-around align-items-center' >
                                            <Button size='sm'>+</Button>
                                            <h5>1</h5>
                                            <Button size='sm'>-</Button>
                                        </div>
                                    </td>
                                    <td>59.98$</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col>
                        <Card>
                            <CardHeader>Cart total</CardHeader>
                            <CardBody style={{marginTop: 30}}>
                                <CardTitle tag="h5">$99.97</CardTitle>
                                <Button style={{marginTop: 30, width: '100%'}}>Place order</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
