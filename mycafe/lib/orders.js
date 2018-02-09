'use strict';
var Q = require('q');

//
//this section should be completed by you
//as specified in customer_display_order.js
//
//return avairable actions for each order identifier
//
   module.exports = function () {
     return {
       display: function (orderId) {
         return Q.fulfill(

           {
           items: [],
           totalPrice: 0,
           actions: [
             {
               action: 'append-beverage',
               target: orderId,
               parameters: {
                 beverageRef: null,
                 quantity: 0
                  }
               }
             ]
           }
   //---------------------------------------------------------------------------
   /*
            {
              items: [
                {
                  beverage: {
                    id: "expresso id",
                    name: "Expresso",
                    price: 1.50
                     },
                  quantity: 1},
                {
                  beverage: {
                    id: "mocaccino id",
                    name: "Mocaccino",
                    price: 2.30
                     },
                  quantity: 2
                }
              ],
              totalPrice: 6.1,
              actions: [
                {
                  action: 'append-beverage',
                  target: orderId,
                  parameters: {
                    beverageRef: null,
                    quantity: 0 }
                },
              ]
              }
      */
//---------------------------------------------------------------------------

           ); }
           }; };
