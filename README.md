# Desafio-Fullstack-Agenda-kZNick

Este é um desafio que consiste em criar um pequeno cadastro de clientes com vínculo de contatos e mostrar o cliente e seus contatos vinculados.

## Requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em seu sistema.

## Como Usar

Siga as etapas abaixo para executar o projeto localmente após cloná-lo do repositório.

1. **Clonando o repositório:**

   Abra o terminal e execute o seguinte comando para clonar o repositório: git clone git@github.com:kZNick/Desafio-Fullstack-Agenda-kZNick-Back-End.git


2. **Instalando dependências:**

Navegue para o diretório do projeto e instale as dependências executando: npm install

3. **Configurando o ambiente:**

Renomeie o arquivo `.env.example` para `.env` e atualize as variáveis de ambiente conforme necessário.


4. **Executando o projeto:**

Após a compilação, execute o servidor usando: npm run dev


O servidor estará disponível em `http://localhost:3001`.

## Banco de Dados

Este projeto utiliza o PostgreSQL como banco de dados. Certifique-se de ter uma instância do PostgreSQL instalada em seu ambiente de desenvolvimento ou de produção.

Você pode configurar as credenciais do banco de dados editando o arquivo `.env` na raiz do projeto com as seguintes variáveis: DATABASE_URL=postgres://usuario-do-banco:senha-do-usuario@servidor-do-banco:5432/nome-do-banco


## Rotas

### Usuários

#### POST /users

Cria um novo usuário.

Exemplo de corpo da requisição:
```json
{
  "fullName": "João da Silva",
  "email": "joao@example.com",
  "password": "senha123"
}

Retorno da API em caso de sucesso:{
  "id": 1,
  "fullName": "João da Silva",
  "email": "joao@example.com"
}

GET /users
Obtém todos os usuários cadastrados.

Retorno da API:[
  {
    "id": 1,
    "fullName": "João da Silva",
    "email": "joao@example.com"
  },
  {
    "id": 2,
    "fullName": "Maria Souza",
    "email": "maria@example.com"
  },
  // Mais usuários...
]

PATCH /users
Atualiza informações do usuário.

Exemplo de corpo da requisição:{
  "fullName": "João Silva"
}

Retorno da API em caso de sucesso:{
  "id": 1,
  "fullName": "João Silva",
  "email": "joao@example.com"
}

DELETE /users
Exclui um usuário.

Login
POST /login
Realiza o login do usuário.

Exemplo de corpo da requisição:{
  "email": "joao@example.com",
  "password": "senha123"
}

Retorno da API em caso de sucesso:{
  "accessToken": "token-de-autenticacao"
}

Contatos
POST /contacts
Cria um novo contato para um usuário.

Exemplo de corpo da requisição:{
  "fullName": "Contato 1",
  "email": "contato1@example.com",
  "telefone": "123456789"
}

Retorno da API em caso de sucesso:{
  "id": 1,
  "fullName": "Contato 1",
  "email": "contato1@example.com",
  "telefone": "123456789",
  "userId": 1
}


GET /contacts
Obtém todos os contatos cadastrados.

Retorno da API:[
  {
    "id": 1,
    "fullName": "Contato 1",
    "email": "contato1@example.com",
    "telefone": "123456789",
    "userId": 1
  },
  {
    "id": 2,
    "fullName": "Contato 2",
    "email": "contato2@example.com",
    "telefone": "987654321",
    "userId": 2
  },
  // Mais contatos...
]

GET /contacts/user
Obtém todos os contatos de um usuário específico.

Retorno da API:[
  {
    "id": 1,
    "fullName": "Contato 1",
    "email": "contato1@example.com",
    "telefone": "123456789",
    "userId": 1
  },
  {
    "id": 3,
    "fullName": "Contato 3",
    "email": "contato3@example.com",
    "telefone": "555555555",
    "userId": 1
  },
  // Mais contatos do usuário 1...
]

PATCH /contacts/:id
Atualiza informações de um contato.

Exemplo de corpo da requisição:{
  "email": "novoemail@example.com"
}

Retorno da API em caso de sucesso:{
  "id": 1,
  "fullName": "Contato 1",
  "email": "novoemail@example.com",
  "telefone": "123456789",
  "userId": 1
}

DELETE /contacts/:id
Exclui um contato.