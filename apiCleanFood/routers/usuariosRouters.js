//Importando o express
const express = require('express');

//Importando o router
const router = express.Router();

//Configurando o modo de usar a rota
const usariosControllers = require('../controllers/usuariosControllers');

router.use('/', usariosControllers);

module.exports = router;
 

