const { Product } = require('./index')

/**
 * Save new product to database
 */
const createProduct = async ({ title, description, price, creationDate, categoryId }) => {
	const product = new Product({
		title,
		description,
		price: +price,
		creationDate: new Date(creationDate),
		category: categoryId
	})

	return product.save()
}

module.exports = { createProduct }
