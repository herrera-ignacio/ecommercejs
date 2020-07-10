const { buildSchema } = require('graphql')
const { Product, ProductInput, ProductQueries, ProductMutations } = require('./product')
const { User, UserInput, UserMutations } = require('./user')

module.exports = buildSchema(`
	${Product}
	${User}

	${ProductInput}
	${UserInput}

	type RootQuery {
		${ProductQueries}
	}

	type RootMutation {
		${ProductMutations}
		${UserMutations}
	}

	schema {
		query: RootQuery
		mutation: RootMutation
	}
`)
