'use strict';

var Q = require('q');

//used for this.result in customer_display.js

function asOrder(orderId) {

  function totalPriceFor(items) {
    return items.reduce(function (total, item) {
      return total + item.beverage.price * item.quantity;
    }, 0);
  }
//
//Only avairable actions will be contained in here
//Ex. empty order only cotains append-beverage action AVAIRABLE
  function actionsFor(items) {

    var actions = [
      {
        action: 'append-beverage',
        target: orderId,
        parameters: {
          beverageRef: null,
          quantity: 0
        }
      }
    ];

    items.forEach(function (item) {
      //push into actions array[] above
      //push() メソッドは、配列の末尾に 1 つ以上の要素を追加
      actions.push({
        action: 'edit-beverage',
        target: orderId,
        parameters: {
          beverageRef: item.beverage.id,
          newQuantity: item.quantity
        }
      });
      actions.push({
        action: 'remove-beverage',
        target: orderId,
        parameters: {
          beverageRef: item.beverage.id
        }
      });
    });
    if (items.length > 0) {
      actions.push({
        action: 'place-order',
        target: orderId
      });
    }
    return actions;
  }

  return function (items) {
    return {
      items: items.slice(),
      totalPrice: totalPriceFor(items),
      actions: actionsFor(items)
    };
  };
}

module.exports = function (daos) {
  var orderById = Q.denodeify(daos.order.byId),
      messagesById = Q.denodeify(daos.message.byId),
      updateMessages = Q.denodeify(daos.message.update);

  function appendMessages(orderId) {
    return function (order) {
      return messagesById(orderId)
          .then(function (messages) {
            order.messages = messages.slice();
            return updateMessages({
              id: orderId,
              data: []
            });
          }).then(function () {
            //console.log(order);
            return order;
          });
    };
  }

  return {
    display: function (orderId) {
      return orderById(orderId)
          .then(asOrder(orderId))
          .then(appendMessages(orderId));
    }
  };
};
