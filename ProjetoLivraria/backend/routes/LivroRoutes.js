
const express = require('express');
const router = express.Router();
const cepController = require('../controllers/LivroController');

router.get('/:cep', cepController.buscarCep);
module.exports = router;
