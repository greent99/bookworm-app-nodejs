const Order = require('../models/Order')
const Order_Item = require('../models/Order_Item')
const sequelize = require('../utils/db')

module.exports = {
    async addOrder(req, res) {
        console.log(req.body.productArr)
        try {
            const productArr = req.body.productArr || null
            if(productArr != null && productArr.length > 0)
            {
                const order_amount = req.body.order_amount
                const current_date = new Date()
                const order = await Order.create({
                    order_date: current_date,
                    order_amount: order_amount
                }
                // , {transaction: t}
                )
                let order_item;
                for(order_item of productArr)
                {
                    const book_id = order_item.id
                    const price = order_item.book_price
                    const quantity = order_item.quantity
                    const order_id = order.id

                    const new_order_item = await Order_Item.create({
                        book_id: book_id,
                        price: parseFloat(price) ,
                        quantity: quantity,
                        order_id: +order_id
                    })
                }
                //await t.commit();

                return res.json({ 
                    data: order,
                    status: 200
                })
            }
        } catch (error) {
            // If the execution reaches this line, an error was thrown.
            // We rollback the transaction.
            //await t.rollback();
            console.log(error)
          
        }

        return res.json({
            data: [],
            message: 'Something error',
            status: 400
        })
    }
}