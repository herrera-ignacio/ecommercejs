const Product = `type Product {
	_id: ID!
	title: String!
	description: String!
	price: Float!
	creationDate: String!
	category: Category!
}`

const ProductInput = `input ProductInput {
	title: String!
	description: String!
	price: Float!
	creationDate: String!
	categoryId: String!
}`

const ProductQueries = `products: [Product!]!`

const ProductMutations = `createProduct(productInput: ProductInput): Product`

module.exports = {
	Product,
	ProductInput,
	ProductQueries,
	ProductMutations
}
