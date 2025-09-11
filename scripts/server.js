
//primeiro iremos instalar algumas ferramentas essenciais
//primeiro iremos iniciar um servidor no nosso projeto
//depois iremos instalar o express cors
const express = require('express');
const cors = require('cors');
const app = express();

//vamos dizer que queremos usar o cors e o json
app.use(cors());
app.use(express.json());

//vamos criar um banco de dados ficticio
const usuarios= [
    {email: 'admin@empresa.com' , senha : '12345'},
    {email: 'usuario@empresa.com', senha : 'senha123'}
];

//agora iremos criar uma rota de login
//autenticacao de login
app.post('/login' ,(req,res)=>{
    const {email,senha} = req.body;
    
    //nos iremos procurar no nosso banco de dados o usuario e a senha
    const usuario = usuarios.find(
        u=> u.email === email && u.senha === senha
    );

    if (usuario) {
        return res.json({sucesso : true , mensagem : 'login realizado com sucesso'});
    }else { 
        return res.status(401).json({sucesso : false , mensagem : 'email ou senha invalido'});
    }
});

/*app.post('/dashboard' , (req,res)=>{
    //aqui no corpo da requisicao tenho que colocar quais sao os elementos
    //que sao disponibilizados no html
    const {email,senha} = req.body;
    const usuario = usuarios.find(
    )
})*/

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})