const express = require('express')

const app = express()

app.get('/users', (request, response) =>{
    return response.send('Hello World')
})

app.listen(3333)