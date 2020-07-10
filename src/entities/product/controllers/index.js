const { ProductCreate } = require('../use-cases/Create')
const { ProductList } = require('../use-cases/List')
const { CategoryFromId } = require('../../category/use-cases/List')

const ProductController = {
	getProducts: async (ids) => ProductList(ids),
	createProduct: async ({ productInput }) => {
		const product = await ProductCreate(productInput)
		const category = await CategoryFromId(product.category)
		return { ...product._doc, category: category._doc }
	}
}

module.exports = ProductController
