'use strict';
module.exports = function () {
  var Given = this.Given,
      When = this.When,
      Then = this.Then;

     Given(/^that the order is empty$/, function (cb) {
       cb.pending();
     });
     When(/^the customer displays the order$/, function (cb) {
       cb.pending();
     });
     Then(/^no order items will be shown$/, function (cb) {
       cb.pending();
     });
     Then(/^"([^"]*)" will be shown as total price$/,
     function(expectedTotalPrice, cb) {
       cb.pending();
     });
     Then(/^there will only be possible to add a beverage$/, function (cb) {
       cb.pending();
     });
};
