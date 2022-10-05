const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    origin: {
        type: String,
    },
    pages: {
        type: Number,
    },
    published_year: {
        type: Number,
        requires: true
    },
    stock: {
        type: Number,
        required: true
    },
    isdigital: {
        type: Boolean,
        required: true
    }
});

module.exports = Book = mongoose.model('book', BookSchema);