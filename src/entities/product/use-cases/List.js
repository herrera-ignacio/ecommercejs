const { Product } = require('../model')

const ProductList = async () => Product.find()

module.exports = { ProductList }
