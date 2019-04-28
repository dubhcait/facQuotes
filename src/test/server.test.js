const test = require('tape');
const request = require('supertest');

const app = require('./../app');

test("tape is working", t => {
    t.pass();
    t.end();
});

test("Testing / endpoint", t => {
    request(app)
    .get('/')
    .expect(200)
     .expect('content-type' , /text/)
     .end((err, res) => {
         t.error(err);
         t.end();
     })
});

test("Testing 404 endpoint", t => {
    request(app)
    .get('/ghsjDA')
    .expect(404)
     .expect('content-type' , /text/)
     .end((err, res) => {
         t.error(err);
         t.end();
     })
});

