//Importando o express
const express = require('express');

//Importando o router
const router = express.Router();

//Configurando o modo de usar a rota
const clientesControllers = require('../controllers/clientesControllers');

router.use('/', clientesControllers);

module.exports = router;