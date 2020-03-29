const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(cors())

// app.use(cors({    <<, se estive em produção precisamos colocar o origin
//     origin: 'http://meuapp.com'
// }))
//


app.use(express.json())
app.use(routes)


app.listen(3333)