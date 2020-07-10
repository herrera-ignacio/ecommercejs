const { Category } = require('../model')

const CategoryList = async () => Category.find()

module.exports = { CategoryList }
