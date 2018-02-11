'use strict';
module.exports = function (stepHandler) {
     return function () {
       var cb = arguments[arguments.length - 1];

       try {
         var result = stepHandler.apply(this, arguments);
         if (result && typeof result.then === 'function') {
           result.then(function (ignoredParam) {
             cb() }, cb);
        }else
           cb();
          } catch (err) {
            cb(err);
          }
      };
};
