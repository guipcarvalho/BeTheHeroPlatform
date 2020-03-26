const connection = require('../database/connection')

module.exports = {
    async list(ngo_id, page) {
        const incidents = connection('incident')

        if(ngo_id)
            incidents.where('ngo_id', ngo_id)

        const { count } = await incidents.clone().count('id as count').first()

        const incidentList = await incidents
            .limit(5)
            .offset((page - 1) * 5)
            .select('*')

        return {
            incidentList,
            count
        }
    }
}