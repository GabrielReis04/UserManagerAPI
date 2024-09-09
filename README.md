# API de Usuários

Este projeto é uma API simples de gerenciamento de usuários, construída com Node.js, Express e Prisma, conectada a um banco de dados PostgreSQL.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Express](https://expressjs.com/) - Framework web para Node.js
- [Prisma](https://www.prisma.io/) - ORM para interagir com o banco de dados
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/GabrielReis04/UserManagerAPI.git

   
2. Acesse o diretório do projeto:

```
cd UserManagerAPI

3. Instale as dependências:
npm install

4. Configure o banco de dados PostgreSQL no arquivo .env:

Crie um arquivo .env na raiz do projeto e adicione a seguinte linha, substituindo as informações do DATABASE_URL conforme necessário:

5. Execute as migrações do Prisma para criar as tabelas no banco de dados:
npx prisma migrate dev



## Como Rodar o Projeto:

1. Execute o servidor:
npm start
O servidor rodará na porta 3000.

Teste a API usando uma ferramenta como Postman ou curl.



## Endpoints da API

Criar um usuário
Endpoint: POST /usuarios

Cria um novo usuário no banco de dados.

Requisição:

json
Copiar código
{
  "email": "user@example.com",
  "name": "John Doe",
  "idade": "30"
}
Resposta: 201 Created

json
Copiar código
{
  "email": "user@example.com",
  "name": "John Doe",
  "idade": "30"
}
Listar todos os usuários
Endpoint: GET /usuarios

Retorna todos os usuários cadastrados no banco de dados.

Resposta: 200 OK

json
Copiar código
[
  {
    "id": "1",
    "email": "user@example.com",
    "name": "John Doe",
    "idade": "30"
  }
]
Editar um usuário
Endpoint: PUT /usuarios/:id

Atualiza as informações de um usuário existente no banco de dados.

Requisição:

json
Copiar código
{
  "email": "updated@example.com",
  "name": "John Smith",
  "idade": "35"
}
Resposta: 201 Created

json
Copiar código
{
  "email": "updated@example.com",
  "name": "John Smith",
  "idade": "35"
}
Deletar um usuário
Endpoint: DELETE /usuarios/:id

Deleta um usuário existente do banco de dados.

Resposta: 200 OK

json
Copiar código
{
  "message": "User deletado com sucesso!"
}


## Observações
O Prisma ORM é utilizado para interagir com o banco de dados PostgreSQL, permitindo operações como criação, leitura, atualização e exclusão de usuários.

