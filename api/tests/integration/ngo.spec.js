const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('NGO', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ngo', async () => {
        console.log('entrou')

        const response = await
            request(app)
            .post('/ngos')
            .send({
                name: 'Lar tia Anastacia',
                email: 'contato@lartiaanastacia.com.br',
                whatsapp: '21 99452-1101',
                city: 'Teresópolis',
                uf: 'RJ'
            })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})