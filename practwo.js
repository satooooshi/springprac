'use strict';

function OutputRandomElem() {
  var dao = {
        byId: 'random byId',
        update: 'random update'
      },
      storage = {};

  //
  //storage object に　関数要素を追加
  //
  storage.dao = function () {
    return dao;
  };

  return storage;
};



//They are DIFFERENT!!
console.log(OutputRandomElem().dao);
console.log(OutputRandomElem().dao().byId);
console.log("");
//------------------------------------------------------------------------------
var counter=0;
var beverage={
  expresso: function () {
    return {
      id: "expresso id",
      name: "Expresso",
      price: 1.50
    };
  },
  mocaccino: function () {
    return {
      id: "mocaccino id",
      name: "Mocaccino",
      price: 2.30
    };
  },
  capuccino: function () {
    return {
      id: "capuccino id",
      name: "Capuccino",
      price: 2
    };
  }
};
function asOrderItem(itemExample) {
  return {
    //var beverage = require('./beverages');
    //expresso: function () {
    //  return {
    //    id: "expresso id",
    //    name: "Expresso",
    //    price: 1.50
    //  };
    //},
    beverage: beverage[itemExample.beverage](),
    quantity: itemExample.quantity
  };
}
//与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成
function withItems(itemExamples) {
  counter += 1;
  return {
    id: "<non empty order " + counter + ">",
    //data is array[{},{},{},...] of objects{beverage:,quantity:,}
    data: itemExamples.map(asOrderItem)
  };
}

var itemExamples=[
  {beverage:'mocaccino',price: 200, quantity: 1},
  {beverage: 'expresso',price: 300, quantity: 2},
  {beverage: 'capuccino',price: 400, quantity: 1}
];
console.log(withItems(itemExamples).data[0].quantity);
console.log(withItems(itemExamples).data[1].quantity);
console.log(withItems(itemExamples).data[2].quantity);
