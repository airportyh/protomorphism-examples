"use strict"
const _Map = require('../protocols/map')

_Map.implementation(Map, {
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