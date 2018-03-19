'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * 
 * here we want to show how asynchronous calls might get messy
 * when we add calls on top of each others
 */


var async = require("async")

var db = require("./db")

var serializeResult = function(input, callback){
    console.log("Serializer Started")
    setTimeout(function(){
        callback(null, input)
    }, 2000)
}

var fetchResultFromDb = function(callback){
    console.log("Main Fetch Started")
    db.fetch(function(error, result){
        if(error){
            callback(error)
            return
        }

        serializeResult(result, function(error, result){
            if(error){
                callback(error)
                return
            }
            callback(null, result)
        })
    }, 2000)
}

fetchResultFromDb(function(error, result){
    if(error){
        console.error(error)
        return
    }
    console.log(JSON.stringify(result))
})