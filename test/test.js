var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world from my first Node App!!.. J', function(done) {
    request(app).get('/').expect('hello world from my first Node App!!.. J', done);
  });
});