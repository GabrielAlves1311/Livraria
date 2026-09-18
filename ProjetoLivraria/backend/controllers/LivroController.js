const livroService = require('../services/livroService');
const Livro = require('../models/Livro');
async function buscarLivro(req, res) {
  const titulo = req.params.titulo.trim();
  if (!titulo) {
    return res.status(400).json({
      erro: true,
      mensagem: 'Digite o título de um livro.'
    });
  }
  try {
    const livro = await livroService.consultarLivro(titulo);
    if (!livro) {
      return res.status(404).json({
        erro: true,
        mensagem: 'Livro não encontrado.'
      });
    }
    await Livro.create({
      titulo: livro.titulo,
      autor: livro.autor,
      editora: livro.editora,
      ano: livro.ano,
      paginas: livro.paginas
    });
    return res.status(200).json({
      titulo: livro.titulo,
      autor: livro.autor,
      editora: livro.editora,
      ano: livro.ano,
      paginas: livro.paginas
    });
  } catch (erro) {
    console.error(erro);
    if (erro.message === 'ERRO_LIVRO_API') {
      return res.status(502).json({
        erro: true,
        mensagem: 'Não foi possível consultar a API de livros.'
      });
    }
    return res.status(500).json({
      erro: true,
      mensagem: 'Erro interno ao consultar ou salvar o livro.'
    });
  }
}

module.exports = {
  buscarLivro
};
