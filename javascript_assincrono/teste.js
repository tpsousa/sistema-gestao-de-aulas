

//exemplo simples
//requisicao get
async function buscarPosts(){
    //fazemos uma requisicao
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    //guardamos a resposta em uma variavel dados
    const dados = await resposta.json();
    
    //mostrar esses dados
    console.log(dados);
}
buscarPosts()

//requisicao post
async function criarPost() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            title : 'Novo post',
            body : 'Conteudo do post',
            userId: 1
        })
    });

    const dados = await resposta.json();
    console.log('Criado:', dados);
}

criarPost();

//exemplos de apis legais para usar no postman
//https://api.thecatapi.com/v1/images/search
//https://api.coingecko.com/api/v3/coins/bitcoin
//JSONplaceholder
//sites - mock api
