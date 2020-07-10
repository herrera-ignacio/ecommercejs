const { CategoryCreate } = require('../use-cases/Create')
const { CategoryList } = require('../use-cases/List')

const CategoryController = {
	getCategories: async () => CategoryList(),
	createCategory: async ({ categoryInput }) => {
		const category = await CategoryCreate(categoryInput)
		return { ...category._doc }
	}
}

module.exports = CategoryController
