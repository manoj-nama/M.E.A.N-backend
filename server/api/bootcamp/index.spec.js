'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var bootcampCtrlStub = {
  index: 'bootcampCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var bootcampIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './bootcamp.controller': bootcampCtrlStub
});

describe('Bootcamp API Router:', function() {

  it('should return an express router instance', function() {
    bootcampIndex.should.equal(routerStub);
  });

  describe('GET /api/bootcamps', function() {

    it('should route to bootcamp.controller.index', function() {
      routerStub.get
        .withArgs('/', 'bootcampCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
