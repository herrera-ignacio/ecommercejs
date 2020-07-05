const { UserCreate } = require('../use-cases/Create')

const UserController = {
	createUser: async ({ userInput }) => {
		const user = await UserCreate(userInput.email, userInput.password)
		return { ...user._doc, password: null }
	}
}

module.exports = UserController
