const { buildSchema } = require('graphql')
const { schemas } = require('./schemas')

module.exports = buildSchema(`
	${schemas}

	type RootQuery {
		products: [Product!]!
	}

	type RootMutation {
		createProduct(productInput: ProductInput): Product
		createUser(userInput: UserInput): User
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`)
