const bookRouter = require('./book')
const indexRouter = require('./index')
const orderRouter = require('./order')
const categoryRouter = require('./category')
const authorRouter = require('./author')

module.exports = function(app) {
    app.use('/', indexRouter);
    app.use('/books', bookRouter);
    app.use('/orders', orderRouter);
    app.use('/categories', categoryRouter)
    app.use('/authors', authorRouter)
}

