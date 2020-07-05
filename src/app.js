const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.send('Hello world')
});

const products = []

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
		products: () => products,
		createProduct: (args) => {
			const { title, description, price, creationDate } = args.productInput
			const product = {
				_id: Math.random().toString(),
				title,
				description,
				price,
				creationDate
			}
			products.push(product)
			return product
		}
	},
	graphiql: true
}))

app.listen(3000, () => console.log('Listening on port 3000'));