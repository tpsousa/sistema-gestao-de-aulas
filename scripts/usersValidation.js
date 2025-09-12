
//quando a gente vai mexer com um projeto back end
//nos temos que instalar algumas dependencias

const express =  require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const bancoDeDados = [{nome : "thiago" , password : 12345},{nome : "bad dog ", password : 'baddogzada'}];

app.router('/post/autentication',(req,res)=>{
  
   try  {
     
      const {email,senha} = req.body;

      if (!email | !senha){
        res.status(404).json({message : 'nao foi possivel fazer a autenticacao'});
      }
      else {
         const user_name  = bancoDeDados.filter(users => users.name);
         const user_password = bancoDeDados.filter(users => users.password);

         if (user_name == email && user_password == senha){
            res.status(200).json({message : 'login realizado com sucesso'})
            res.redirect('/dashboard.html');
         }
      }
   }catch(err){
   }
})
const PORT = 3000;

app.listen(PORT,()=>{
    console.log('servidor rodando com sucesso na porta 3000');
});



