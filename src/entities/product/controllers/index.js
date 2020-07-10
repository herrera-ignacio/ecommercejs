const { ProductCreate } = require('../use-cases/Create')
const { ProductList } = require('../use-cases/List')
const { productWithCategory, productsWithCategory } = require('./populate')

const ProductController = {
	getProducts: async (ids) => productsWithCategory(await ProductList(ids)),
	createProduct: async ({ productInput }) => productWithCategory(await ProductCreate(productInput))
}

module.exports = ProductController
