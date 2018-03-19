'use strict'

/**
 * @author Abdulelah Alanqry <abdulelah@alanqry.com>
 */

// Event Emitter is a core function from the events module for NodeJS 
var EventEmitter = require ('events').EventEmitter;

// here you can initiate new event
var emitter = new EventEmitter ();

// here you can set a listener for an event
emitter.on ('name', function (first, last) {
  console.log (first + ', ' + last);
});

// here is an activation example of an event
emitter.emit ('name', 'tj', 'holowaychuk');
emitter.emit ('name2', 'simon', 'holowaychuk');
