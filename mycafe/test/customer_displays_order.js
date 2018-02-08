'use strict';

var chai = require('chai'),
expect = chai.expect,
sinon = require('sinon'),
orderSystemWith = require('../lib/orders');

   describe('Customer displays order', function () {
     beforeEach(function () {
       this.orderDAO = {
         byId: sinon.stub()
       };
       this.orderSystem = orderSystemWith(this.orderDAO);
     });
     context('Given that the order is empty', function () {
       beforeEach(function () {
         this.orderId = 'some empty order id';
         this.orderDAO.byId.withArgs(this.orderId).returns([]);
         this.result = this.orderSystem.display(this.orderId);
       });
       
       it('will show no order items');
       it('will show 0 as total price');
       it('will only be possible to add a beverage');
      });
      context('Given that the order contains beverages', function() {
       it('will show one item per beverage');
       it('will show the sum of the unit prices as total price');
       it('will be possible to place the order');
       it('will be possible to add a beverage');
       it('will be possible to remove a beverage');
       it('will be possible to change the quantity of a beverage');
     });
     context('Given that the order has pending messages', function(){
       it('will show the pending messages');
       it('there will be no more pending messages');
     });
   });


//<ROLE>_<ACTION>_<ENTITY>
//where <ROLE> is the name of the kind of user that performs the actions,
//<ACTION> is the user operation represented by this feature,
//and <ENTITY> is the main information entity that is affected by the feature action
//
