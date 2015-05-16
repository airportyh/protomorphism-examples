var arrayLike = require('./util/array-like')
var Iterable = require('../protocols/iterable')
var Pattern = require('../protocols/pattern')
var List = require('../protocols/list')

Iterable.implementation(Array, {
  iterator: function(arr){
    return new arrayLike.Iterator(arr)
  }
})

Pattern.implementation(Array, {
  matches: function(pattern, str){
    return pattern.indexOf(str) !== -1
  }
})

List.implementation(Array, {
  get: function(arr, i){
    return arr[i]
  },
  set: function(arr, i, item){
    arr[i] = item
  },
  length: function(arr){
    return arr.length
  }
})