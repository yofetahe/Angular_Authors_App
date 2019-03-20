const { Author, Book } = require('./models');

module.exports = {

  getAllAuthors: (req, res) => {
    Author.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getAuthorById: (req, res) => {
    const ID = req.params.id;
    Author.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addAuthor: (req, res) => {
    const DATA = req.body;
    console.log(DATA);
    Author.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthor: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.findOneAndUpdate({ _id: ID }, DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthorBooks: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({ _id: ID }, {$push: {books: DATA}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOneAndDelete({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}