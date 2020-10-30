var mongoose = require('mongoose');

// create a model class
var bookModel = mongoose.Schema({
    title: String,
    price: Number,
    author: String,
    genre: String
    
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);