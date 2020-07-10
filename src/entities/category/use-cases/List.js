const { Category } = require('../model')
const { ProductList } = require('../../product/use-cases/List')

const CategoryList = async (ids) => {
	const query = {}
	if (Array.isArray(ids) && ids.length > 0) {
		query._id = { $in: ids }
	}
	return Category.find(query)
}

const CategoryFromId = async id => Category.findById(id)

module.exports = { CategoryList, CategoryFromId }
