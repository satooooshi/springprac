'use strict';

//orders.js
//actions factory

/*
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
*/
var beverage = require('./beverages');
   var counter = 0;
   function asOrderItem(itemExample) {
     return {
beverage: beverage[itemExample.beverage.toLowerCase()](),
quantity: Number(itemExample.quantity) };
}
   function toCamelCase(actionName) {
     return actionName
         .split(/\s+/)
         .map(function (word, i) {
           if (i === 0)
             return word;
           return word.charAt(0).toUpperCase() + word.slice(1);
         }).join('');
  }
function actionFactoryFor(order) { return {
   removeItem: function (index) {
         return {
           action: 'remove-beverage',
           target: order.id,
           parameters: {
             beverageRef: order.data[index].beverage.id
           }
}; },
       editItemQuantity: function (index) {
         var item = order.data[index];
         return {
           action: 'edit-beverage',
           target: order.id,
           parameters: {
             beverageRef: item.beverage.id,
             newQuantity: item.quantity
           }
}; },
       appendItem: function () {
         return {
           action: 'append-beverage',
           target: order.id,
           parameters: {
             beverageRef: null,
quantity: 0 }
}; },
placeOrder: function () { return {
           action: 'place-order',
         target: order.id
      };
} };
}
module.exports = {
  empty: function () {
return {
  id: "<empty order>",
data: [] };
},
items: function (itemExamples) {
  return itemExamples.hashes().map(asOrderItem);
},
withItems: function (itemExamples) {
  counter++;
  return {
    id: "<non empty order " + counter + ">",
data: this.items(itemExamples) };
},
actionsForOrderFrom: function (order, actionExamples) {
  var actionFactory = actionFactoryFor(order);
  return actionExamples.hashes().map(function (actionExample) {
         var actionName = toCamelCase(actionExample.action),
             forItem = actionExample['for item'];
         return actionFactory[actionName](Number(forItem) - 1);
       });
}
};
