"use strict"
const protocol = require('protomorphism')

module.exports = protocol({
  get: function(list, i){
    // return the i'th element in the list
  },
  set: function(list, i, item){
    // set the i'th element in the list to item
  },
  length: function(list){
    // return the length of the list
  }
})