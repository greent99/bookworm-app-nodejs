import React from 'react'
import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BookCard from '../BookCard'
import './FeaturedBook.css'

export default function FeaturedBook() {
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
        
    ]

    const renderlistBook = (books) => {
        return books.map((item, index) => {
            return <Col sm="3">
                <BookCard item={item} key={index}></BookCard>
            </Col>
        })
    }

    const [activeTab, setActiveTab] = useState('1')

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div class='list-featured-book'>
            <h3>Featured Book</h3>
            <div class="center" id='tab-featured-book'>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Recommended
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Popular
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <div>
                <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                {renderlistBook(books)}
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                {renderlistBook(books)}
                            </Row>
                        </TabPane>
                    </TabContent>
            </div>
        </div>
    )
}

