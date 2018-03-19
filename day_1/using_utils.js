'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * 
 * this example is to demonistrate how we can import a module from some other sources
 */


myUtils = require('./utils.js');
var obj1 = {one: 1};
var obj2 = {two: 2};
var obj3 = myUtils(obj1, obj2); console.log(obj3)