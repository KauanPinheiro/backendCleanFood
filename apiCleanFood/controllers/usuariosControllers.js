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
        })
});

//Insírindo dados na tabela
router.post('/', (req,res) => {
    const {codUsuario,datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha} = req.body
    const queryIst = `INSERT INTO tbusuarios(codUsuario,datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

        dbConexao.query(queryIst, [codUsuario,datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha], (err) => {
            if(err) throw err;
                res.status(201).json({
                    mensagem: 'Usuário cadastrado com sucesso!',
                    body: req.body
                });
        });
});



module.exports = router;