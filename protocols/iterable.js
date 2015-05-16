"use strict"

const protocol = require('protomorphism')

module.exports = protocol({
  iterator: function(obj){
    // return an iterator adhering to the ES6 
    // iterator protocol
  }
})

