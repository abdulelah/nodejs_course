'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 */

 // this function receives a function and execute it
function calculator(paramA, paramB, func){
    return func(paramA, paramB)
}

console.log(calculator(5, 7, (a, b) => a * b + 10))


