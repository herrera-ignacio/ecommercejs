const { Product } = require('../model')

const ProductCreate = ({ title, description, price, creationDate }) => {
	const product = new Product({
		title,
		description,
		price: +price,
		creationDate: new Date(creationDate)
	})
	return product.save()
}

module.exports = { ProductCreate }
