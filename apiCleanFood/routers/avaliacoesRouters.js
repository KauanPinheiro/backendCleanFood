//Importando o express
const exprees = require('express');

//Importando as rotas
const router = exprees.Router();

//Configurando a rota 
const avaliacoesControllers = require('../controllers/avaliacoesControllers');

//Configurando o mode de usar a rota
router.use('/', avaliacoesControllers);

//Exportando a rota
module.exports = router;