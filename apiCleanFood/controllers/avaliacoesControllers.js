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
router.post('/', (req,res) => {
    const {comentario,dataComentario,codReceita} = req.body;
    const queryIst = 'insert into tbavaliacoes (comentario,dataComentario,codReceita,{}) values (?,?,?)';

    dbConexao.query(queryIst, [comentario,dataComentario, codReceita], (err) => {
        if(err) throw err;
        res.status(201).json({
            mensagem: 'Comentário feito com sucesso!',
            body:req.body
        })
    })

})


module.exports = router;