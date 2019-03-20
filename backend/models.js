const mongoose = require('mongoose');
require('./dbConnection')(mongoose);


const BooksSchema = new mongoose.Schema({
    title: {type: String},
    genre: {type: String},
    publication_year: {type: String},
    summery: {type: String},
    cover: {type: String}    
}, {timestamps: true})

const AuthorsSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String},
    books: [ BooksSchema ]
}, {timestamps: true});


const Author = mongoose.model('Authors', AuthorsSchema);
const Book = mongoose.model('Books', BooksSchema);

module.exports = { Author, Book };