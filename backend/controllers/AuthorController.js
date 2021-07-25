const Author = require('../models/Author')

module.exports = {
    async getAll (req, res){
        const data = await Author.findAll()
        return res.json({
            data: data,
            status: 200
        })
    }
}