'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var assetCtrlStub = {
  index: 'assetCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var assetIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './asset.controller': assetCtrlStub
});

describe('Asset API Router:', function() {

  it('should return an express router instance', function() {
    assetIndex.should.equal(routerStub);
  });

  describe('GET /api/assets', function() {

    it('should route to asset.controller.index', function() {
      routerStub.get
        .withArgs('/', 'assetCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
