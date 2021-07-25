import {React, useState} from 'react'
import './Shop.css'
import '../../index.css'
import { Row, Col } from 'reactstrap'
import FilterBook from '../FilterBook/FilterBook'
import ShopContent from '../ShopContent/ShopContent'

export default function Shop() {
    const [category, setCategory] = useState(null)
    const [author, setAuthor] = useState(null)
    const [rating, setRating] = useState(null)
    const [sortType, setSortType] = useState('onSale')
    const [pageSize, setPageSize] = useState(20)
    const [page, setPage] = useState(1)
    
    const handleCategory = (category) => {
        setCategory(category)
    }
    const handleAuthor = (author) => {
        setAuthor(author)
    }
    const handleRating = (rating) => {
        setRating(rating)
    }
    const handleSort = (sortType) => {
        setSortType(sortType)
    }
    const handlePageSize = (size) => {
        setPageSize(size)
    }
    const handlePage = (page) => {
        setPage(page)
    }

    return (
        <div class='container' style={{marginTop: 50}}>
            <div class='shop'>
                <h3>Books</h3>
            </div>
            <hr></hr>
            <div>
                <Row>
                    <Col sm='2'>
                        <FilterBook onSelectCategory = {handleCategory} onSelectAuthor = {handleAuthor} onSelectRating = {handleRating}/>
                    </Col>
                    <Col>
                        <ShopContent onSelectSort = {handleSort} onSelectPageSize = {handlePageSize} onSelectPage = {handlePage}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
