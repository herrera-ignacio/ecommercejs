const schema = {
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true
	},
	creationDate: {
		type: Date,
		required: true
	}
}

module.exports = { schema }
