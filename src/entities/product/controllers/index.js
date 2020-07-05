const { ProductCreate } = require('../use-cases/Create')
const { ProductList } = require('../use-cases/List')

const ProductController = {
	getProducts: async () => ProductList(),
	createProduct: async ({ productInput }) => {
		const product = await ProductCreate(...productInput)
		return { ...product._doc }
	}
}

module.exports = ProductController
