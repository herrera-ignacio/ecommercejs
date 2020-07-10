const { Product } = require('../model')
const { CategoryFromId } = require('../../category/use-cases/List')

/**
 * Create and save Product to database,
 * add relationship to Category
 * @param {*} param0 
 */
const ProductCreate = async ({ title, description, price, creationDate, categoryId }) => {
	const product = new Product({
		title,
		description,
		price: +price,
		creationDate: new Date(creationDate),
		category: categoryId
	})
	const savedProduct = await product.save()
	const category = await CategoryFromId(categoryId)
	category.products.push(savedProduct._id)
	await category.save()
	return savedProduct
}

module.exports = { ProductCreate }
