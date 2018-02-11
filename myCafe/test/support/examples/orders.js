'use strict';

//orders.js
//actions factory


var beverage = require('./beverages');

var counter = 0;

function asOrderItem(itemExample) {
  return {
    beverage: beverage[itemExample.beverage](),
    quantity: itemExample.quantity
  };
}

module.exports = {
  //
  //
  //export array[] of functions
  //
  //
  empty: function () {
    return {
      id: "<empty order>",
      data: []
    };
  },
  //connect item with self-generated idintifier
  //IDをcustomer.jsの中で指定する手間をなくすため（IDはあまり関係ないから）
  withItems: function (itemExamples) {
    counter += 1;
    return {
      id: "<non empty order " + counter + ">",
      //data is array[{},{},{},...] of objects{beverage:,quantity:,}
      data: itemExamples.map(asOrderItem)
    };
  },
  actionsFor: function (order) {
    return {
      removeItem: function (index) {
        var item = order.data[index];
        return {
          action: 'remove-beverage',
          target: order.id,
          parameters: {
            beverageRef: item.beverage.id
          }
        };
      },
      editItemQuantity: function (index) {
        var item = order.data[index];
        return {
          action: 'edit-beverage',
          target: order.id,
          parameters: {
            beverageRef: item.beverage.id,
            newQuantity: item.quantity
          }
        };
      },
      appendItem: function () {
        return {
          action: 'append-beverage',
          target: order.id,
          parameters: {
            beverageRef: null,
            quantity: 0
          }
        };
      },
      place: function () {
        return {
          action: 'place-order',
          target: order.id
        };
      }
    };
  }
};