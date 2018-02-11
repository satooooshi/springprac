'use strict';

var chai = require('chai'),
       expect = chai.expect,
       order = require('../support/examples/orders');
   chai.use(require("sinon-chai"));
   chai.use(require("chai-as-promised"));

module.exports = function () {

  var Given = this.Given,
      When = this.When,
      Then = this.Then;

  this.World = require("../support/world.js");

     Given(/^that the order is empty$/, function (cb) {
       this.order = this.orderStorage.alreadyContains(order.empty());
       this.messages = this.messageStorage.alreadyContains({
         id: this.order.id,
         data: []
       });
       this.messageStorage.updateWillNotFail();
        cb();
     });
     When(/^the customer displays the order$/, function (cb) {
       this.result = this.orderSystem.display(this.order.id);
       cb();
     });
     Then(/^no order items will be shown$/, function (cb) {
       expect(this.result).to.eventually
         .have.property('items').that.is.empty
         .then(function (ignoredItems) {
           cb();
         }, cb);
     });
     Then(/^"([^"]*)" will be shown as total price$/,
     function(expectedTotalPrice, cb) {
       expect(this.result).to.eventually.have.property('totalPrice')
        .that.is.equal(Number(expectedTotalPrice))
        .then(function (ignored) {
          cb();
        }, cb);
     });
     Then(/^there will only be possible to add a beverage$/, function (cb) {

       expect(this.result).to.eventually
         .have.property('actions')
         .that.is.deep.equal([
           {
             action: 'append-beverage',
             target: this.order.id,
             parameters: {
               beverageRef: null,
               quantity: 0 }
             } ])
             .then(function (ignored) {
               cb();
             }, cb);
     });
};
