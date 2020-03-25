const express = require('express')

const routes = express.Router()


routes.post('/ongs', (request, response) =>{
    const {name, email, whatsapp, city, uf} = request.body

   
    
    return response.send()
})

    module.exports = routes