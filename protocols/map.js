"use strict"

const protocol = require('protomorphism')

module.exports = protocol({
  get: function(map, key){
    // return the value at the specified key
  },
  set: function(map, key, value){
    // set the value at the specified key
  },
  has: function(map, key){
    // return whether or not the specified key is in the map
  },
  keys: function(map){
    // return an iterable containing all keys
  },
  values: function(map){
    // return an iterable containing all values
  },
  entries: function(map){
    // return an iterable containing all entries [key, value]
  }
})
