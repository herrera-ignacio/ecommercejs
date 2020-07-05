const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')

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

const cluster = process.env.MONGO_CLUSTER
const dbName = process.env.MONGO_DBNAME
const mongoUrl = `mongodb+srv://@${cluster}/${dbName}?retryWrites=true&w=majority`
const mongoConfig = {
	user: process.env.MONGO_USER,
	pass: process.env.MONGO_PASSWORD,
	retryWrites: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
}
console.log(mongoUrl)
mongoose.connect(mongoUrl, mongoConfig)
	.then(() => console.log('mongo connected'))
	.catch((err) => console.log(err))

module.exports = { app }
