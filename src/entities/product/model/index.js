const mongoose = require('mongoose')
const { schema } = require('./schema')

const Schema = mongoose.Schema;

const productSchema = new Schema(schema)

module.exports = mongoose.model('Product', productSchema)