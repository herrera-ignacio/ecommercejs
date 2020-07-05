const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const { getProducts, createProduct } = require('./entities/product/controllers')
const { createUser } = require('./entities/user/controllers')

const app = express();

app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
	schema: buildSchema(`
		type Product {
			_id: ID!
			title: String!
			description: String!
			price: Float!
			creationDate: String!
		}

		type User {
			_id: ID!
			email: String!
			password: String
		}
		
		input ProductInput {
			title: String!
			description: String!
			price: Float!
			creationDate: String!
		}

		input UserInput {
			email: String!
			password: String
		}

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
	`),
	rootValue: {
		products: getProducts,
		createProduct,
		createUser
	},
	graphiql: true
}))

module.exports = { app }
