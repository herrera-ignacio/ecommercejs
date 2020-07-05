const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const Product = require('./entities/product/model')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Hello world')
});

app.use('/graphql', graphqlHTTP({
	schema: buildSchema(`
		type Product {
			_id: ID!
			title: String!
			description: String!
			price: Float!
			creationDate: String!
		}
		
		input ProductInput {
			title: String!
			description: String!
			price: Float!
			creationDate: String!
		}

		type RootQuery {
			products: [Product!]!
		}

		type RootMutation {
			createProduct(productInput: ProductInput): Product
		}

		schema {
			query: RootQuery
			mutation: RootMutation
		}
	`),
	rootValue: {
		products: async () => Product.find(),
		createProduct: (args) => {
			const { title, description, price, creationDate } = args.productInput
			const product = new Product({
				title,
				description,
				price: +price,
				creationDate: new Date(creationDate)
			})
			return product.save()
				.then(res => { console.log(res); return { ...res._doc } })
				.catch(err => console.log(err))
		}
	},
	graphiql: true
}))

module.exports = { app }
