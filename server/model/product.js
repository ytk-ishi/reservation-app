const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: { type: String, required: true, max: [60, '最大60文字までです。'] },
    price: Number,
    description: String,
    coverImage: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headingText1: String,
    headingText2: String,
    headingText3: String
});

module.exports = mongoose.model('Product', ProductSchema);