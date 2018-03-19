'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * 
 * callback is one of the two ways to build asynchronous functions
 * in this approach we pass a callback function as an argument of
 * the asynchronus function and then we use that callback when
 * the execution is done
 */

 // callback function usually has two arguments the first one is for
 // the errors, which you should set to null incase the execution was
 // successful or you should fill it with an error in case of errors
var asyncFunction = function(argA, callback){
    setTimeout(function(){
        // "returning" result
        callback(null, {tasty: 'sandwich'})

        // or
        // "throwing" errors
        callback(new Error('Error message'))
    }, 50)
}

asyncFunction("hello", function(error, result){
    if(error){
        console.error("opps! error happend")
        return; // don't forget about this!
    }
    // handle result
    console.log("nice every thing works as expected")
})
console.log("hi")