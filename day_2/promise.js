'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * 
 * promise is one of the two ways to build asynchronous functions
 * in this approach we first trigger the asynchronus function and then
 * we assign the callbacks when the function is done using the functions
 * then and catch 
 */

function resolveAfter2Seconds (makeItResolve) {
  // Promise Object takes two function parameters
  // the first one we use it when the function is successfully
  // executed which will treger the callback of the then function
  // the second one we may use it when the function has some failures
  // which will treger the callback of the catch function
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      if(makeItResolve)
        resolve('resolved OK')
      else
        reject ('Opps! rejected')
    }, 2000)
  })
}


// if you want the promise to get rejected change the true value to false
function asyncCall () {
  console.log ('calling')
  var promise = resolveAfter2Seconds (true)
  promise
    .then(function(result){
        console.log (result)
    })
    .catch(function(error){
        console.error(error)
    })
}

asyncCall ();
