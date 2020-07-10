const { Category } = require('../model')

const CategoryCreate = ({ title, description }) => {
	const category = new Category({
		title,
		description
	})
	return category.save()
}

module.exports = { CategoryCreate }
