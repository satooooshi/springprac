'use strict';

var Q = require('q');
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
