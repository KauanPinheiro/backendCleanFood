// Importando módulo do mysql
const mysql = require('mysql');

// Criando conexão com o banco
const conecta = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'dbcleanfood'
});

conecta.connect((err) => {
    if(err){
        console.log("Erro ao conectar ao banco ", err);
            reject(err);
                return;
    }
        console.log('Conectado ao banco,deu bom ;)')
});

module.exports = conecta;

