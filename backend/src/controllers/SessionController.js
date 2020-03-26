const connection = require('../database/connection')
module.exports = {
    async create(request, response){
        const {id} = request.body

        const ong = await connection('ongs')
        .where('id' , id)
        .select('name')
        .first() // assim ele nao retorna array e sim primeiro resultado
    
        if(!ong){
            return response.status(400).json({error: 'não foi encontrada ong com este id'})
        }

        return response.json(ong)
    }
}