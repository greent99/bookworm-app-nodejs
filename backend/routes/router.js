const bookRouter = require('./book')
const indexRouter = require('./index')
const orderRouter = require('./order')

module.exports = function(app) {
    app.use('/', indexRouter);
    app.use('/books', bookRouter);
    app.use('/orders', orderRouter);
}

