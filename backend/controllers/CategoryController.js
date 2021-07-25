const Category = require('../models/Category')

module.exports = {
    async getAll (req, res){
        const data = await Category.findAll()
        return res.json({
            data: data,
            status: 200
        })
    }
}