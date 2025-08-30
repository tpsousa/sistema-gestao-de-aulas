
//antes de entender oque e javascript assincrono a gente tem que entender oque e sincrono
function ola(){
    console.log("ola");
}

function aleatoria() {
    console.log("testando");
}

function hello(){
    console.log("hello");
}

//quantidade de linhas no banco de dados
let bancoDeDados = [
    {nome : "thiago", user_id : 38467384638},
    {nome : "thiago", user_id : 38467384638},
    {nome : "thiago", user_id : 38467384638},
    {nome : "thiago", user_id : 38467384638},
    {nome : "thiago", user_id : 38467384638},
    {nome : "thiago", user_id : 38467384638},
    {nome : "thiago", user_id : 38467384638}
];

//vamos ir mais a fundo nisso: 

//resolve -- ele vai resolver a funcao
//reject -- ele vai recusar a funcao
//callback --- a resposta de uma funcao
function reject(){
    console.log("a requisicao foi rejeitada")
}

function resolve(){
    console.log("a funcao foi resolvida")
}

buscarDadosBancoDeDados = (callback)=>{
    return callback
}
function buscarDadosBancoDeDados (user_id, resolve,reject,callback){
   setTimeout(()=>{
    if(!bancoDeDados){
        console.log("nao existe o banco de dados")

        reject()
    }
    else{
        for (let i = 0 ; i < bancoDeDados.length ; i++){
              console.log(bancoDeDados[user_id]);
         }
        console.log("a consulta ao banco de dados foi bem sucedida");

        resolve()
        callback(bancoDeDados);
    }
   },5000);
}

let resultado = buscarDadosBancoDeDados(bancoDeDados);

console.log(resultado);

//========== event loop ======
//professor,porque o loop de eventos ele executa um de cada vez?
//porque o javascript e uma linguagem single thread
//que ele executa uma funcao de cada vez
//ta mais oque e esse event loop em js
//ele serve para armazenar nossas funcoes(callback) e executar nossas funcoes
//o event loop ele armazena os callbacks -- respostas das funcoes
//uma estrategia: 

//pegaria as funcoes mais demoradas e jogaria para fora do event loop
// ola()
//hello () ele vai executar um de cada vez

//..... varias funcoes()

// -- a funcao buscaDadosBancoDeDados sera executada depois de 5 segundos

//depois que passa os 5 segundos,ele volta la pro event loop
//===================== assync ================
//// buscarDadosBancoDeDados()
//eu vou fazer o seguinte,olha essa funcao vai rodar depois de 5 segundos

buscarDadosBancoDeDados()

ola()

hello() //saida?

aleatoria();

//beleza,a gente ja sabe oque e programacao assincrona e como funciona,mas deve ter algum jeito mais simples de resolver esse problema
/*function lavarLouça(resolvida,rejeitada,darResposta){
  resolvida("thiago lavou a louca")
}
lavarLouça = new Promise()
lavarLouça
.then(resolve => {return resolve}) // se for bem sucedida
.catch(reject => {return reject}) //se a minha promise for mal sucedida
.finally(()=> console.log("finalizando funcao de lavar louça"));
*/

const minhaPromise = new Promise((resolve,reject)=>{

    let sucesso = true;

    if (sucesso){
      resolve("operacao concluida com sucesso")
      // res.status(202).json("foi bem sucedida")
    }

    else{
        reject("ela nao foi bem sucedida")
        //res.status(404).json("ela nao foi encontrada")
    }
})

minhaPromise
.then((resultado)=>{
    console.log(resultado)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("finalizando");
})

//estrutura basica de uma promise
//tres estados:
//pode ser bem sucedida -- resolvida
//pode ser mal sucedida -- nao resolvida
//finalizar a promise

//==================== PROMISE =================== 
// e uma promessa


//pesquisa --- protocolo http/https : oque e,como funciona,etc
//data limite; 04/09/2025