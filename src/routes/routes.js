let db = require('../config/database.js')
const LivroDao = require('../app/infra/livro-dao');
const express = require('express');


module.exports = (app) => {
  app.listen(3000, () => {
    console.info('Servidor rodando na porta 3000')
  })

  app.get('/', (req, resp) => {
    resp.marko(require('../views/home.marko'))
  })

  app.use('*', (req, res, next) => {
    console.info('Teste');

    next();
  })

  app.use('/estatico', express.static('src/app/public'));


  // Rota de Livros

  app.get('/livros', (req, resp) => {
    const livroDao = new LivroDao(db);

    livroDao.lista().then(livros => {
      resp.marko(require('../views/livros/lista.marko'), {
        livros: livros
      })
    }).catch(erro => console.log(erro))
  })

  app.post('/livros', (req, resp) => {
    console.log(req.body)
    const livroDao = new LivroDao(db);

    livroDao.adiciona(req.body).then(resp.redirect('/livros')).catch(erro => console.log(erro))
  })

  app.delete('/livros/:id', function(req, resp) {
    const id = req.params.id;

    const livroDao = new LivroDao(db);
    livroDao.remove(id).then(() => resp.status(200).end()).catch((erro) => console.error(erro))
  });

  // Rota para formulário de livros

  app.get('/livros/form', (req, resp) => {
    resp.marko(require('../views/livros/form.marko'))
  })
};
