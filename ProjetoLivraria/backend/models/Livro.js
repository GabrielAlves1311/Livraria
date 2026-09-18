const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({

  titulo: {
    type: String,
    required: true
  },

  autor: {
    type: String,
    default: ''
  },

  editora: {
    type: String,
    default: ''
  },

  ano: {
    type: String,
    default: ''
  },

  paginas: {
    type: Number,
    default: 0
  },

  consultadoEm: {
    type: Date,
    default: Date.now
  }

});

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;
