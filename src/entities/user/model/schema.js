const UserSchema = (types) => ({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	wishlistProducts: [
		{
			type: types.ObjectId,
			ref: 'Product'
		}
	]
})

module.exports = { UserSchema }