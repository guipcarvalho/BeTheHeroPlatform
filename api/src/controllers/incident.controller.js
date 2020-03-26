const connection = require('../database/connection')

const incidentService = require('../services/incident.service')

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body
        const ngo_id = request.headers.authorization

        const [id] = await connection('incident').insert({
            title,
            description,
            value,
            ngo_id
        })

        return response.json({ id })
    },
    
    async list(request, response) {
        return response.json(await incidentService.list(request.headers.authorization))
    },

    async delete(request, response) {
        const { id } = request.params
        const ngo_id  = request.headers.authorization

        const incident = await connection('incident')
            .where('id', id)
            .select('ngo_id')
            .first()
        
        if(!incident)
            return response.status(404).send()
        else if(incident.ngo_id != ngo_id)
            return response.status(401).json({ error: 'You don\'t have access to this case'})
        else
            await connection('incident').where('id', id).delete()
        
        return response.status(204).send()
    }
}