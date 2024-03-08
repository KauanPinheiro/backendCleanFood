//Importando o express
const express = require('express');

//Importando o router
const router = express.Router();

//Conectando o banco
const dbConexao = require('../models/db.Connection');

//Visualizando a tabela
router.get('/', (req,res) => {
    const querySf = ('select * from tbusuarios')
        dbConexao.query(querySf, (err,result) => {
            if(err) throw err;
                res.json(result)
        });
});

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    const queryDel = 'DELETE FROM tbusuarios WHERE id = ?';

    dbConexao.query(queryDel, [id], (err,result) => {
        if(err) {
            res.status(500).json({mensagem: 'Erro ao adicionar'})
        }
    })
})




module.exports = router;