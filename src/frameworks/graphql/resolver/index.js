const { getProducts, createProduct } = require('../../../entities/product/controllers')
const { createUser } = require('../../../entities/user/controllers')

module.exports = {
	products: getProducts,
	createProduct,
	createUser
}
