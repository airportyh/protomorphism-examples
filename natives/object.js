"use strict"
const Show = require('../protocols/show')
const Iterable = require('../protocols/iterable')
const Map = require('../protocols/map')
const arrayLike = require('./util/array-like')

Show.implementation(Object, {
  show: function(obj){
    return JSON.stringify(obj, null, '  ')
  }
})

Iterable.implementation(Object, {
  iterator: function(obj){
    if (arrayLike.isArrayLike(obj)){
      return new arrayLike.Iterator(obj)
    }else{
      throw new Error(this + ' is not iterable.')
    }
  }
})

Map.implementation(Object, {
  get: function(obj, key){
    return obj[key]
  },
  set: function(obj, key, value){
    obj[key] = value
  },
  has: function(obj, key){
    return key in obj
  },
  keys: function(obj){
    return Object.keys(obj)
  },
  values: function(obj){
    return Object.keys(obj).map(function(key){
      return obj[key]
    })
  },
  entries: function(obj){
    return Object.keys(obj).map(function(key){
      return [key, obj[key]]
    })
  }
})