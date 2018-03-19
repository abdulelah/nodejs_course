"use strict"

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>

 * There are three types of function defenision
 * keep in mind that those three types are not similar
*/


// this type of definitions will get initiated before any other elements in the file
function doSomething(varA){
    return varA
}

// this one is function definition as variable
var doSomething2 = function(varA){
    return varA
}

// this one is arrow function definition
var doSomething3 = (varA) => {
    return varA
}