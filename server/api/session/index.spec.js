'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var sessionCtrlStub = {
  index: 'sessionCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var sessionIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './session.controller': sessionCtrlStub
});

describe('Session API Router:', function() {

  it('should return an express router instance', function() {
    sessionIndex.should.equal(routerStub);
  });

  describe('GET /api/sessions', function() {

    it('should route to session.controller.index', function() {
      routerStub.get
        .withArgs('/', 'sessionCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
