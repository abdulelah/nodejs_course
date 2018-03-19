'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 */

// as you can see here you cannot set variable type to a variable
var test = "xyz"

console.log(typeof(test))

var func = function(a){
    return a
}

// also here as you can see we can change the variable type without any errors
test = func("aa")

console.log(typeof(test))


// to check type one of the techniques is to use typeof
// also there are other approaches such as using instanceof to check for
// the custom types such as objects and classes
if (typeof(test) === "number"){
    console.log("it is a number")
}else{
    console.log("wrong")
}