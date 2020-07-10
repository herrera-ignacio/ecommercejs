const { Product } = require('../model')
const { CategoryFromId } = require('../../category/use-cases/List')

const ProductCreate = async ({ title, description, price, creationDate, categoryId }) => {
	const product = new Product({
		title,
		description,
		price: +price,
		creationDate: new Date(creationDate),
		category: categoryId
	})
	return product.save()
}

module.exports = { ProductCreate }
