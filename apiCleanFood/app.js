// a função require é semelhante ao import do react,ele serve para importa módulos para o projeto
const express = require('express');

// iniciando a aplicação express
const app = express();

// definindo a porta na qual o servidor vai rodar 
const port = 3000;


// Verificando se a porta está funcionando 
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

// Verificando se o app está funcionado 
app.get('/', (req,res) => {
    res.json({mensagem: 'Oba! rodou :) agora vamos aos trabalhos'})
});

app.use(express.json());

//Importando as rotas
const avaliacoesRouters = require('./routers/avaliacoesRouters');
const usuariosRouters = require('./routers/usuariosRouters');


app.use('/usuarios',usuariosRouters);
app.use('/avaliacoes',avaliacoesRouters);

