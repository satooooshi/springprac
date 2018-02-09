'use strict';

//errors.js
//error factory

module.exports = {
  badQuantity: function (quantity) {
    return {
      key: "error.quantity",
      params:[quantity]
    };
  },
  beverageDoesNotExist: function () {
    return {
      key: "error.beverage.notExists"
    };
  }
};
