const request = require('supertest');
const expect = require('expect');

let app = require('./server').app

describe('Server', () => {

    describe('Get', () => {
        it('should return a string response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('Get/users', () => {
        it('should test that your name is on the list', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Lasse',
                        age: 25
                    })
                })
                .end(done)
        });
    });

});