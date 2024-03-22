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

// Insírindo dados no banco de dados
router.post('/', (req,res) => {
    const { datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha} = req.body;
    const queryIst = 'insert into tbusuarios(datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha) values (?,?,?,?,?,?,?,?,?,?)'

    dbConexao.query(queryIst, [ datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha], (err,result) => {
        if(err) {
            res.status(500).json({ mensagem: 'Erro ao adicionar produto'});
        }else{
            res.status(201).json({
                mensagem: 'Produto adicionado!',
                codUsuario: result.insertId,
                body: req.body
            })
        }
    })
})


//Apagando o usuario do banco pelo ID
router.delete('/:codUsuario', (req,res) => {
    const {codUsuario} = req.params;
    const queryDel = 'DELETE FROM tbusuarios WHERE codUsuario = ?';

    dbConexao.query(queryDel, [codUsuario], (err,result) => {
        if (err) throw err;
            res.status(201).json({
                    mensagem: `Usuário de codUsuario: ${codUsuario}, deletado com sucesso!`
            })
    })
});

//Atualizando a os dados de uma tabela 
router.put('/:codUsuario', (req,res) => {
    const {cod} = req.params;
    const {datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha} = req.body;
    const queryPut = ` update tbusuarios set datanasc = ?, endereco = ?, cidade = ?, bairro = ?, cep = ?, nome = ?, cpf = ?, email = ?, telCel = ?, senha = ? where codUsuario = ?`

    dbConexao.query(queryPut, [datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha,cod], (err) => {
        if(err) throw err;
        res.status(201).json({
            mensagem: 'Alteração aplicada com sucesso!',
                envio:{
                    datanasc: datanasc,
                    endereco: endereco,
                    cidade: cidade,
                    bairro: bairro,
                    cep: cep,
                    nome: nome,
                    cpf: cpf,
                    email: email,
                    telCel: telCel,
                    senha: senha
                }
        })
    })
})




module.exports = router;