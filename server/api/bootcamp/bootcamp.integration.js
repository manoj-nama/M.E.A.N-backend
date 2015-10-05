'use strict';

var app = require('../..');
var request = require('supertest');

describe('Bootcamp API:', function() {

  describe('GET /api/bootcamps', function() {
    var bootcamps;

    beforeEach(function(done) {
      request(app)
        .get('/api/bootcamps')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          bootcamps = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      bootcamps.should.be.instanceOf(Array);
    });

  });

});
