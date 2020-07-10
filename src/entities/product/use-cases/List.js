const { Product } = require('../model')
const { CategoryFromId } = require('../../category/use-cases/List')

const ProductList = async (ids) => {
	const query = {}
	if (Array.isArray(ids) && ids.length > 0) {
		query._id = { $in: ids }
	}
	const products = await Product.find(query)
	const productsWithCategory = await Promise.all(products.map(async (product) => {
		product.category = await CategoryFromId(product.category)
		return product
	}))
	return productsWithCategory
}

module.exports = { ProductList }
