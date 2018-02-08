'use strict';
var Q = require('q');

//
//this section should be completed by you
//as specified in customer_display_order.js

   module.exports = function () {
     return {
       display: function (orderId) {
         return Q.fulfill({
           items: [],
           totalPrice: 0,
           actions: [
             {
               action: 'append-beverage',
               target: orderId,
               parameters: {
                 beverageRef: null,
                 quantity: 0 }
               } ]
             }); }
           }; };
