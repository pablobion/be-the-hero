const express = require('express')

const routes = express.Router()


routes.post('/users', (request, response) =>{
    const body = request.body
    
    console.log(body)
    
        return response.send({
            evento: 'omni',
            aluno:'diego',
        })
    })

    module.exports = routes