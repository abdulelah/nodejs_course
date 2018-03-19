'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>

 * this example is to demonistrate how functional code looks like
 * the only main thing that we need to show here is that in functional
 * codes we are not allowed to change inputs
*/

function funcA(input){
    return funcB(input, "hello")
}

function funcB(input, funcAOut){
    return funcC(input, funcAOut + ", ")
}

function funcC(input, funcBOut){
    return funcBOut + input
}

// as you can see the flow is as following
// funcA -> funcB -> funcC
// <- funcA <- funcB <- funcC
console.log(funcA("Someone"))