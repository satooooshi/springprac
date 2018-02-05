'use strict';

var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon');

module.exports = function () {
  var dao = {
        byId: sinon.stub(),
        update: sinon.stub()
      },
      storage = {};

  //
  //storage object に　関数要素を追加
  //
  storage.dao = function () {
    return dao;
  };
  storage.alreadyContains = function (entity) {
    var data = entity.data;
    dao.byId
        .withArgs(entity.id)
        .callsArgWithAsync(1, null, data);
    return entity;
  };
  storage.updateWillNotFail = function () {
    dao.update.callsArgWithAsync(1, null);
  };

  //Ex.
  //entity
  //{
  //  id: this.order.id,
  //  data: []
  //}
  storage.toExpectUpdate = function (entity) {
    expect(dao.update).to.be.calledWith(entity);
  };

  return storage;
};
