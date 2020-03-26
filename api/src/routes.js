const express = require('express')

const routes = express.Router()

routes.get('/users', (request, response) => {
    return response.json({
        nois: "Olá mundo 2"
    })
})

module.exports = routes