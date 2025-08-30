

const users = [{ nome  : "thiago" , password : 13672632627},
    { nome  : "thiago" , password : 13672632627},
    { nome  : "thiago" , password : 13672632627},
    { nome  : "thiago" , password : 13672632627},
    { nome  : "thiago" , password : 13672632627},
 ]

export async function verifyUser(email, password, user_id){
  setTimeout(()=>{
      try{
        const buscarDados = users.filter(user => user)


        const response = await fetch("https://localhost: 3000");
        
        if (!response){
          res.status(404).json("cannot search the local host")
        }

        if (!user){
            res.status(404).json("cannot search the user");
            return bancoDados;

            return 0;
        }
        else {
           res.status(202).json("users search sucessfly");

        }
      }catch(err){
        console.log("cannot search the user")
      }
  },10000)

  
  //tarefa de casa --me tragam uma pesquisa : protocolo http/https
  // data final -- 04/09/2025