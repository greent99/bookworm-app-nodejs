import React from 'react'
import bookimg from '../../book.jpg'


export default function BookDetailTitle() {
    return (
        <div class='d-flex justify-content-start border'>
            <div class='col-sm-4 d-flex justify-content-start'>
                <div class='d-flex flex-column'>
                    <img width='100%' src={bookimg} alt="Card image cap" />
                    <div >
                        <p class='text-primary'>By (author) Ngo Van Tai</p>
                    </div>
                </div>
            </div>
            <div class=' d-flex justify-content-start'>
                <div class='d-flex flex-column'>
                    <div class='d-flex justify-content-start'>
                        <h5>Book title</h5>
                    </div>
                    <p class='text-primary'>
                        One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su, nhưng đổi lại, cậu không bao giờ có thể bơi được nữa. Giờ đây, Luffy cùng những người bạn hải tặc của mình ra khơi tìm kiếm kho báu One Piece, kho báu vĩ đại nhất trên thế giới.

                        Trong One Piece, mỗi nhân vật trong đều mang một nét cá tính đặc sắc kết hợp cùng các tình huống kịch tính, lối dẫn truyện hấp dẫn chứa đầy các bước ngoặt bất ngờ và cũng vô cùng hài hước đã biến One Piece trở thành một trong những bộ truyện nổi tiếng nhất không thể bỏ qua. Hãy đọc One Piece để hòa mình vào một thế giới của những hải tặc rộng lớn, đầy màu sắc, sống động và thú vị, cùng đắm chìm với những nhân vật yêu tự do, trên hành trình đi tìm ước mơ của mình.
                    </p>
                </div>
            </div>
        </div>
    )
}
