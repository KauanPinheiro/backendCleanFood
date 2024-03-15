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
router.put('/:cod', (req,res) => {
    const {cod} = req.params;
    // const {codUsuario,datanasc,endereco,cidade,bairro,cep,nome,cpf,email,telCel,senha} = req.body;
    // const query = `update tbUsuarios set datanasc = ?, endereco = ?, cidade = ?, bairro = ?, cep = ?, nome = ?, cpf =?, email =?, telCel = ?, senha = ?
    // WHERE codUsuario = 2`;
    const [codUsuario, datanasc] = req.body;
    const query = 'update tbUsuarios set codUsuario = ?,  datanasc = ? where codUsuario = 2';


    dbConexao.query(query, [codUsuario, datanasc, cod], (err) => {
        if(err) throw err;
            res.status(201).json({
                mensagem: `Alteração feita com sucesso!`,
                    envio:{
                        codUsuario: codUsuario,
                        datanasc: datanasc
                        // endereco: endereco
                        // cidade: cidade,
                        // bairro: bairro,
                        // cep: cep,
                        // email: email,
                        // telCel: telCel,
                        // senha: senha
                    }
            })
      })
 });




module.exports = router;