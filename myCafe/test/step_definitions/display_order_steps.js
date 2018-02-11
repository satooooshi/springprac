'use strict';

var chai = require('chai'),
       expect = chai.expect,
       order = require('../support/examples/orders'),
       sugar = require('../support/cucumber_sugar');
    chai.use(require("sinon-chai"));
    chai.use(require("chai-as-promised"));

module.exports = function () {

  var Given = this.Given,
      When = this.When,
      Then = this.Then;

  this.World = require("../support/world.js");

     Given(/^that the order is empty$/, function (cb) {
      // In Cucumber.js, all the step handler functions are executed with a special object,
      //called the World, as a runtime context.
      //So, whenever we reference this inside a function handler,
      //we access the World object(this.World is necessary!!)

       this.order = this.orderStorage.alreadyContains(order.empty());
       this.messages = this.messageStorage.alreadyContains({
         id: this.order.id,
         data: []
       });
       this.messageStorage.updateWillNotFail();

       //cb.pending()--indicating that the step is not yet ready to be implemented properly.
       //cb(falthy)--indicate that the step is executed without errors
       //cb(truthy), cb.fail(errormessage)--indicating that there was an error or an assertion failed
        cb();
     });
     When(/^the customer displays the order$/, function (cb) {
       this.result = this.orderSystem.display(this.order.id);
       cb();
     });
     Then(/^no order items will be shown$/, sugar(function () {

       return expect(this.result).to.eventually
         .have.property('items').that.is.empty;
     }));
     Then(/^"([^"]*)" will be shown as total price$/,
     sugar(function(expectedTotalPrice, cb) {
       return expect(this.result).to.eventually.have.property('totalPrice')
        .that.is.equal(Number(expectedTotalPrice));
     }));
     Then(/^there will only be possible to add a beverage$/, sugar(function () {
       return expect(this.result).to.eventually
         .have.property('actions')
         .that.is.deep.equal([
           {
             action: 'append-beverage',
             target: this.order.id,
             parameters: {
               beverageRef: null,
               quantity: 0 }
             } ])
     }));





   this.Given('that the order contains:',
        sugar(function(orderItemExamples) {
     this.order = this.orderStorage .alreadyContains(order.withItems(orderItemExamples));
     this.messages = this.messageStorage.alreadyContains({
       id: this.order.id,
       data: []
     });
     this.messageStorage.updateWillNotFail();
   }));

   this.Then('the following order items are shown:',
          sugar(function(orderItemExamples) {
        return expect(this.result).to.eventually
                .have.property('items')
                .that.is.deep.equal(order.items(orderItemExamples));
   }));
   this.Then('there will be possible to:',
          sugar(function(actionExamples) {
        var expectedActions = order.actionsForOrderFrom(this.order, actionExamples);
        return expect(this.result).to.eventually .have.property('actions')
                .that.have.length(expectedActions.length)
                .and.that.deep.include.members(expectedActions);
   }));

};
