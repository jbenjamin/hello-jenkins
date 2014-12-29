var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello Jenkins!!.. J', function(done) {
    request(app).get('/').expect('hello Jenkins!!.. J', done);
  });
});