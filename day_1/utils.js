'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * this file demonistrate how we can build a module and export it
 * in this example we exported the merge function as the default export
 */

var obj1 = {

}

obj1.name = "abc"
obj1.age = "60"

var obj2 = {
    "whatever": "xyz"
}
console.log(Object.keys(obj1))

var merge = function (obj, other) {
  var keys = Object.keys (other);
  for (var i = 0, len = keys.length; i < len; ++i) {
    var key = keys[i];
    obj[key] = other[key];
  }
  return obj;
};

module.exports = merge;
