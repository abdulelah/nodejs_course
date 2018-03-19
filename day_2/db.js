'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 * 
 * this module was created to simulate database request
 */

var db = {}
db.fetch = function(callback, delay){
    console.log("Fetch Started")
    setTimeout(function(){
        callback(null, [
                {
                    name: "Abdulelah",
                    location: "Riyadh"
                },
                {
                    name: "Someone",
                    location: "Jeddah"
                }
            ]
        )
    }, delay)
}

module.exports = db