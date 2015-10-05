'use strict';

var app = require('../..');
var request = require('supertest');

describe('Session API:', function() {

  describe('GET /api/sessions', function() {
    var sessions;

    beforeEach(function(done) {
      request(app)
        .get('/api/sessions')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          sessions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      sessions.should.be.instanceOf(Array);
    });

  });

});
