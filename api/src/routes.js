const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()


const ongController = require('./controllers/ong.controller')
const incidentController = require('./controllers/incident.controller')
const sessionController = require('./controllers/session.controller')

// ongs 

routes.get('/ngos', ongController.list)
routes.post('/ngos', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(15),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), ongController.create)

// incidents
routes.post('/incidents', incidentController.create)
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}) , incidentController.list)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}) , incidentController.delete)

//session 
routes.post('/sessions', sessionController.create)


module.exports = routes