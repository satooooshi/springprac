'use strict';


//reduce は　一つの変数（Ex.total）に処理した値をまとめてreturnしたい時
//forEachは配列のそれぞれの値を処理して新しい配列作りたい時

var orderId='some order id';

function asOrder(orderId){


function totalPriceFor(items) {
    return items.reduce(function (total, item) {
      return total + item.price * item.quantity;
    }, 0 /*"total" initial value == 0*/);
}


function actionsFor(items) {
//actions array = [{},{},...]
//the array of objects{}
var actions = [];
/* Ex.
 [
  {
    action: 'append-beverage',
    target: orderId,
    parameters: {
      beverageRef: null,
      quantity: 0
    }
  }
];
*/

items.forEach(function(item){
  actions.push({
    action: 'edit-beverage',
    target: orderId,
    parameters: {
      beverageRef: item.beverage,
      newQuantity: item.quantity
    }
  });
});
return actions;
//=========semantically equal===========
/*
return items.map(function(item){
  actions.push({
    action: 'edit-beverage',
    target: orderId,
    parameters: {
      beverageRef: item.beverage,
      newQuantity: item.quantity
    }
  });
});
*/
}


return function (items) {
  return {
    items: items.slice(),
    totalPrice: totalPriceFor(items),
    actions: actionsFor(items)
  };
};

}

//array
var items=[
  {beverage:'mocaccino',price: 200, quantity: 1},
  {beverage: 'expresso',price: 300, quantity: 2},
  {beverage: 'capuccino',price: 400, quantity: 1}
]
var ret=asOrder('some order id');
console.log(ret(items).totalPrice);
