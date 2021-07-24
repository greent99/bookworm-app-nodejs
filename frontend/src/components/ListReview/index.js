import React from 'react'
import Paginate from '../Paginate/Paginate'

export default function ListReview() {

    const reviews = [
        {
            id: 1,
            title: 'Amazing Story! You will love it',
            star: 5,
            review_detail: "Bên cạnh Bản đặc biệt The Institute ( Học Viện) làm nức lòng người hâm mộ ông hoàng truyện kinh dị Stephen King, 1980. Books tiếp tục ra mắt bản thường của Học Viện để đưa tác phẩm đến gần với đông đảo người hâm mộ truyện hơn. Học Viện là tác phẩm áp út của tác giả bán được hơn 350 triệu cuốn sách trên toàn thế giới, Stephen King",
            review_date: '01-01-2021'
        },
        {
            id: 1,
            title: 'Amazing Story! You will love it',
            star: 5,
            review_detail: 'abc',
            review_date: '01-01-2021'
        },
        {
            id: 1,
            title: 'Amazing Story! You will love it',
            star: 5,
            review_detail: 'xyz',
            review_date: '01-01-2021'
        },
        {
            id: 1,
            title: 'Amazing Story! You will love it',
            star: 5,
            review_detail: 'def',
            review_date: '01-01-2021'
        },
        {
            id: 1,
            title: 'Amazing Story! You will love it',
            star: 5,
            review_detail: 'ghj',
            review_date: '01-01-2021'
        }
    ]

    const renderlistReview = (reviews) => {
        return reviews.map((item, index) => {
            return <div key={index} style={{marginTop: 10}} class='d-flex flex-column justify-content-start'>
                <div class='d-flex'>
                    <h5 >{item.title} </h5>
                    <p class='text-primary'>   | {item.star} star</p>
                </div>
                <div class='d-flex justify-content-start'>
                    <p class='text-primary'>{item.review_detail}</p>
                </div>
                <div class='d-flex justify-content-start'>
                    <p class='text-primary'>{item.review_date}</p>
                </div>
                <hr></hr>
            </div>
        })
    }

    return (
        <div>
            <div>
                {renderlistReview(reviews)}
            </div>
            <div class='d-flex justify-content-center'>
                <Paginate />
            </div>
        </div>
    )
}
