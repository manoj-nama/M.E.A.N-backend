'use strict';

var app = require('../..');
var request = require('supertest');

describe('Asset API:', function() {

  describe('GET /api/assets', function() {
    var assets;

    beforeEach(function(done) {
      request(app)
        .get('/api/assets')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          assets = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      assets.should.be.instanceOf(Array);
    });

  });

});
