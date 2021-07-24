import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import './FilterBook.css'

export default function FilterBook() {

    const categories = [
        {
            id: 1,
            name: 'Category 1'
        },
        {
            id: 2,
            name: 'Category 1'
        },
        {
            id: 3,
            name: 'Category 1'
        }
    ]

    const authors = [
        {
            id: 1,
            name: 'Author 1'
        },
        {
            id: 2,
            name: 'Author 2'
        },
        {
            id: 3,
            name: 'Author 3'
        },
    ]

    const renderListFilter = (arr) => {
        return arr.map((item, index) => {
            return <ListGroupItem tag='a' href="#" key={index}>{item.name}</ListGroupItem>
        })
    }
    
    return (
        <div class='filter'>
            <div>
                <h6 class='text-primary'>Filter By</h6>
            </div>
            <div >
               <h5>Category</h5>
                <ListGroup >
                    {renderListFilter(categories)}
                </ListGroup>
            </div>
            <div>
                <h5>Author</h5>
                <ListGroup>
                    {renderListFilter(authors)}
                </ListGroup>
            </div>
            <div>
                <h5>Rating Review</h5>
                <ListGroup>
                    <ListGroupItem>1 Star</ListGroupItem>
                    <ListGroupItem>2 Star</ListGroupItem>
                    <ListGroupItem>3 Star</ListGroupItem>
                    <ListGroupItem>4 Star</ListGroupItem>
                    <ListGroupItem>5 Star</ListGroupItem>
                </ListGroup>
            </div>
        </div>
    )
}
