const express = require('express')

const routes = express.Router()


const ongController = require('./controllers/ong.controller')

// ongs 

routes.get('/ngos', ongController.list)
routes.post('/ngos', ongController.create)

module.exports = routes