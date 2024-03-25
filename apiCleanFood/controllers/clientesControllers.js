const express = require('express');

const router = express.Router();

const dbConexao = require('../models/db.Connection');

//Visualizando os dados da  tabela
router.get('/', (req,res) => {
    const query = `select * from tbclientes`;
    dbConexao.query(query, (err,result) => {
        if(err) throw err;
        res.json(result)
    })
})

//Visualizando os dados da tabela pelo codigo
router.get('/codCliente', (req,res) => {
    const query = `select codReceita from tbreceitas where codReceita = 1; `

})




module.exports = router;