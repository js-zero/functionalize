var slice = Array.prototype.slice;

module.exports = functionalize;

function functionalize (type) {

  Object.getOwnPropertyNames(type.prototype).forEach(function (prop) {

    if ( typeof type.prototype[prop] !== 'function' ) return;

    type[prop] = function () {
      var args = slice.call(arguments);
      return function (subject) {
        return type.prototype[prop].apply(subject, args);
      };
    };

  });
}
