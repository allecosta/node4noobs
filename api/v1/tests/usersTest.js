const request = require('supertest');
const app = require('../app');
const { describe, it } = require('node:test');

describe('User API', () => {
    describe('GET /api/v1/users', () => {
        it('Should return all users', async () => {
            const res = await request(app).get('/api/v1/users');
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBeTruthy();
        });
    });
    describe('POST /api/v1/users', () => {
    it('Should create a new user', async () => {
        const userData = {
            name: 'Test User',
            email: 'test@gmail.com'
        };
        const res = await request(app)
            .post('/api/v1/users')
            .send(userData);

            expect(res.statusCode).toBe(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body).toBe(userData.name);
    });
    it('Should validate request data', async () => {
        const invalidData = {
            email: 'not-an-email'
        };
        const res = await request(app)
            .post('/api/v1/users')
            .send(invalidData);
        
            expect(res.statusCode).toBe(400);
        });
    });
});