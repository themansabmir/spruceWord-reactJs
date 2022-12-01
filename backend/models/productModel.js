const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_id: {
        type: "String",
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: "String",
        required: true,
        trim: true,

    },
    price: {
        type: Number,
        required: true,
        trim: true,

    },
    description: {
        type: "String",
        required: true,
        trim: true,

    },
    images: {
        type: Object,
        required: true,
    },
    category: {
        type: "String",
        required: true,
    },
    checked: {
        type: Boolean,
        default: false
    },
    view: {
        type: Number,
        default: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    stars: {
        type: Number,
        default: 0
    }


})


module.exports = mongoose.model("ProductTable", productSchema)