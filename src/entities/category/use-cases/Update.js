const { CategoryFromId } = require('./List')

/**
 * Add Product ObjectID to Category's list of products
 * @param {number} categoryId 
 * @param {number} productId 
 */
const CategoryAddProduct = async (categoryId, productId) => {
	const category = await CategoryFromId(categoryId)
	category.products.push(productId)
	return category.save()
}

module.exports = { CategoryAddProduct }