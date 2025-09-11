const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

//temm que dizer para o express que iremos utilizar arquivos estaticos
// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

app.post("/post/reposition_class", (req, res) => {
    
  try {
    const { content, reposition_reason, teacher } = req.body;

    if (!content || !reposition_reason || !teacher) {
      return res.status(400).send("Campos obrigatórios faltando!");
    }

    console.log("Nova solicitação recebida:", { content, reposition_reason, teacher });

    // Redireciona para a página de sucesso
    res.redirect("/sucesso.html");

  } catch (err) {
    res.status(500).send("Erro no servidor: " + err.message);
  }

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
