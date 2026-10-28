# Sistema de Gestão de Aulas

Plataforma web para gerenciar aulas, com autenticação de usuários e controle de reposição de aulas, construída com Node.js.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## Sobre o projeto

Professores e instrutores costumam controlar aulas, faltas e reposições em planilhas e mensagens soltas. O **Sistema de Gestão de Aulas** centraliza esse fluxo em uma aplicação web: o usuário se autentica, consulta suas aulas e organiza a reposição das que foram perdidas.

O projeto também foi um laboratório para praticar **JavaScript assíncrono**, **autenticação no back-end** e a organização de uma aplicação Node.js em camadas.

## Funcionalidades

**Implementado**
- Tela de login
- Lógica de autenticação no back-end
- Lógica de reposição de aulas no back-end
- Uso de JavaScript assíncrono (`async/await`, Promises) nas operações do servidor

**Em andamento / planejado**
- Cadastro e listagem de aulas `[confirmar]`
- Painel do usuário com próximas aulas e reposições pendentes `[confirmar]`
- Persistência em banco de dados `[confirmar]`
- Testes automatizados

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js |
| Linguagem | JavaScript |
| Front-end | HTML, CSS e JavaScript (pasta `public`) |
| Gerenciador de pacotes | npm |

> Adicione aqui o framework e o banco usados (por exemplo Express e PostgreSQL), conforme o `package.json`. `[confirmar]`

## Estrutura do projeto

```
sistema-gestao-de-aulas/
├── javascript_assincrono/   # Estudos e lógica com código assíncrono (reposição de aulas)
├── public/                  # Arquivos estáticos servidos ao navegador (páginas e estilos)
├── scripts/                 # Scripts do back-end (autenticação)
├── sources/images/          # Imagens usadas nas telas (ex.: página de login)
├── package.json             # Dependências e scripts do projeto
└── package-lock.json
```

## Como executar

**Pré-requisitos:** [Node.js](https://nodejs.org/) 18 ou superior e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/tpsousa/sistema-gestao-de-aulas.git
cd sistema-gestao-de-aulas

# 2. Instale as dependências
npm install

# 3. Inicie a aplicação
npm start   # [confirmar] ajuste conforme os scripts do package.json
```

Depois de iniciar, acesse `http://localhost:3000` `[confirmar a porta]`.

## Roadmap

- [x] Página de login
- [x] Autenticação no back-end
- [x] Lógica de reposição de aulas
- [ ] CRUD de aulas
- [ ] Painel do usuário
- [ ] Persistência em banco de dados
- [ ] Testes automatizados
- [ ] Deploy

## Boas práticas e próximos passos técnicos

- Manter `node_modules/` fora do versionamento, adicionando-o ao `.gitignore`
- Guardar segredos (chaves, tokens, senhas) em variáveis de ambiente, nunca no código
- Separar rotas, regras de negócio e acesso a dados em camadas distintas

## Autor

**Thiago Sousa** — Estudante de Ciência da Computação (UFMA)

[GitHub](https://github.com/tpsousa) · [LinkedIn](https://www.linkedin.com/in/tpsousa-) · [Portfólio](https://portifolio-thiago-sousa.vercel.app/)
