import React from 'react'
import './Shop.css'
import '../../index.css'
import { Row, Col } from 'reactstrap'
import FilterBook from '../FilterBook/FilterBook'
import ShopContent from '../ShopContent/ShopContent'

export default function Shop() {
    return (
        <div class='container' style={{marginTop: 50}}>
            <div class='shop'>
                <h3>Books</h3>
            </div>
            <hr></hr>
            
            <div>
                <Row>
                    <Col sm='2'>
                        <FilterBook />
                    </Col>
                    <Col>
                        <ShopContent />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
