'use strict';
   var newStorage = require('./storageDouble'),
       orderSystemWith = require('../../lib/orders');
   module.exports = function (cb) {
     this.orderStorage = newStorage();
     this.messageStorage = newStorage();
     this.orderSystem = orderSystemWith({
       order: this.orderStorage.dao(),
       message: this.messageStorage.dao()
     });
              cb(); // We are done!
};
