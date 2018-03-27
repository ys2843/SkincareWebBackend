const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    category: String,
    sub_category: String,
    ingredients: Array,
    url: String,
    image: String,
    detail: Array,
    love_count: Number,
    unsafe_ingredients: Array,
    price: Number,
    is_safe: Boolean,
    brand: String,
    name: String
})

module.exports = mongoose.model('product', productSchema, 'sephora');
