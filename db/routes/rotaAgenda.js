const express = require('express');
const IntegrantesController = require('../controller/agendaController');

const router = express.Router();

// Rota para importar integrantes
router.post('/importar', IntegrantesController.importaIntegrantes);

// Nova rota para buscar todos os registros
router.get('/integrantes', IntegrantesController.getTodosIntegrantes);

// Rota para contabilizar a frequência dos integrantes
router.get('/contaFrequencia', IntegrantesController.contaFrequencia);

module.exports = router;
