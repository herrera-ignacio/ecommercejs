const { ProductSchema } = require('../../../entities/product/model/schema')
const { UserSchema } = require('../../../entities/user/model/schema')
const { ParseSchema } = require('./ParseSchema')

module.exports = {
	schemas: `
		${ParseSchema('Product', ProductSchema)}\n
		${ParseSchema('User', UserSchema)}\n
	`
}

// module.exports = `
// 	type Product {
// 		_id: ID!
// 		title: String!
// 		description: String!
// 		price: Float!
// 		creationDate: String!
// 	}

// 	type User {
// 		_id: ID!
// 		email: String!
// 		password: String
// 	}

// 	input ProductInput {
// 		title: String!
// 		description: String!
// 		price: Float!
// 		creationDate: String!
// 	}

// 	input UserInput {
// 		email: String!
// 		password: String
// 	}
// `
