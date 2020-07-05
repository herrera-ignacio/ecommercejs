const bcrypt = require('bcrypt')
const { User } = require('../model')

const UserCreate = async (email, password) => {
	const pwd = await bcrypt.hash(password, 12)
	const user = new User({
		email,
		password: pwd
	});
	return user.save()
}

module.exports = { UserCreate }