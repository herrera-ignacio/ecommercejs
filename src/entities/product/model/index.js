const { Schema, model } = require('mongoose')
const { ProductSchema } = require('./schema')

module.exports = model('Product', new Schema(ProductSchema))
