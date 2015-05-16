"use strict"
const Map = require('../protocols/map')

Map.implementation(WeakMap, {
  get: function(map, key){
    return map.get(key)
  },
  set: function(map, key, value){
    map.set(key, value)
  },
  has: function(map, key){
    return map.has(key)
  },
  keys: function(map){
    return map.keys()
  },
  values: function(map){
    return map.values()
  },
  entries: function(map){
    return map.entries()
  }
})