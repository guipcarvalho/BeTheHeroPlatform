const connection = require('../database/connection')

module.exports = {
    async list(ngo_id) {
        const incidents = connection('incident')

        if(ngo_id)
            incidents.where('ngo_id', ngo_id)

        return await incidents.select('*')
    }
}