const controllers = require('./controllers');

module.exports = app => {

    app
        .get('/api/authors', controllers.getAllAuthors)
        .get('/api/authors/:id', controllers.getAuthorById)
        .post('/api/authors', controllers.addAuthor)
        .put('/api/authors/:id', controllers.updateAuthor)
        .put('/api/authors/books/:id', controllers.updateAuthorBooks)
        .delete('/api/authors/:id', controllers.deleteAuthor)
}