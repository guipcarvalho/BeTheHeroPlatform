const express = require('express')

const routes = express.Router()


const ongController = require('./controllers/ong.controller')
const incidentController = require('./controllers/incident.controller')

// ongs 

routes.get('/ngos', ongController.list)
routes.post('/ngos', ongController.create)

// incidents
routes.post('/incidents', incidentController.create)
routes.get('/incidents', incidentController.list)
routes.delete('/incidents/:id', incidentController.delete)

module.exports = routes