import express, { request, response } from 'express'
const app  = express()
app.use(express.json())

import { PrismaClient } from '@prisma/client'
const prisma =  new PrismaClient()

//Rota para criar usuario para o banco de dados
app.post('/usuarios', async (request, response) => {

    await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.name,
            idade: request.body.idade
        }
    })



    response.status(201).json(request.body)
})

//criando uma rota aleatoria pra devolver algo
/* 
Pra criar uma rota Precisa:
1) Tipo de Rota /Método HTTP 
2) Endereços
*/

//Listar usuarios do banco de dados
app.get('/usuarios', async (request, response) => {
    const user = await prisma.user.findMany()



    response.json(user)
})


//editar usuario
app.put('/usuarios/:id', async (request, response) => {


    await prisma.user.update ({
        where: {
            id: request.params.id
        },
        data: {
            email: request.body.email,
            name: request.body.name,
            idade: request.body.idade
        }
    })

    response.status(201).json(request.body)

}) 


//deletar usuario
app.delete('/usuarios/:id', async (request, response) => {
    await prisma.user.delete ({
        where: {
            id: request.params.id
        }
    })
    response.status(200).json({message: 'User deletado com sucesso!'})
})


//roda servidor na porta 

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

    /* 
    Objetivo:

    Criar uma API de Usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuários
    */