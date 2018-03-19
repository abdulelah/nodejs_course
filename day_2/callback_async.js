'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * 
 * here we want to show how async library can help into
 * making waterfall call more organized
 */


var async = require("async")

var db = require("./db")

var serializeResult = function(input, callback){
    console.log("Serializer Started")
    setTimeout(function(){
        callback(null, input)
    }, 2000)
}

// as you can see here all what we needed is to set the calls
// in an array which will get executed sequentially and we need
// to set one final callback to end the execution without
// the need to set callbacks on top of each other
var fetchResultFromDb2 = async.waterfall([
        db.fetch,
        serializeResult
    ],
    function(error, result){
        if(error){
            console.error(error)
            return
        }
        console.log(JSON.stringify(result))
    }
)