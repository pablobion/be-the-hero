const express = require('express')

const app = express()

app.use(express.json())

app.post('/users', (request, response) =>{
const body = request.body

console.log(body)

    return response.send({
        evento: 'omni',
        aluno:'diego',
    })
})

app.listen(3333)