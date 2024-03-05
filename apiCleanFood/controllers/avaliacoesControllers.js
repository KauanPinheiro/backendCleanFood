//Importando o exprees
const express = require('express');

//Importando a saida das rotas
const router = express.Router();

//Conectando ao banco 
const dbConexao = require('../models/db.Connection')

//Visualizando a estrutura da tabela;

router.get('/', (req,res) => {
    const querySf = ('select * from tbavaliacoes')
        dbConexao.query(querySf, (err,result) => {
            if(err) throw err;
                res.json(result);
        })
});



module.exports = router;