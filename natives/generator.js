"use strict"

const Iterable = require('../protocols/iterable')
function *gf(){}
let g = gf()

Iterable.implementation(g.constructor, {
  iterator: function(obj){
    return obj
  }
})

