const parseNativeType = (type) => {
	if (!(type.name === 'String' || type.name === 'Number')) {
		return 'String'
	}
	return type.name === 'String' ? type.name : 'Float'
}

/**
 * Create GraphQL schema based on MongoDB schema definition
 * Generates Type definition and TypeInput
 * @param {string} name 
 * @param {*} model 
 */
const ParseSchema = (name, model) => {
	let schema = `type ${name} {\n _id: ID!\n`
	let inputSchema = `input ${name}Input {\n`

	console.log(model)

	for (const key in model) {
		console.log(key)
		const type = parseNativeType(model[key]['type'])
		const isRequired = model[key]['required']
		const param = `${key}: ${type}${isRequired ? '!' : ''}\n`
		schema += param
		inputSchema += param
	}

	schema += '}\n'
	inputSchema += '}\n'

	return schema + inputSchema
}

module.exports = { ParseSchema }
