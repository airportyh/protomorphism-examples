"use strict"
const iterator = require('./protocols/iterable').iterator
const list = require('./protocols/list')

exports.each = function(fn, obj){
  let it = iterator(obj)
  let result
  while (!(result = it.next()).done){
    fn(result.value)
  }
}

exports.map = function(fn, obj){
  let it = iterator(obj)
  let retval = []
  let result
  while (!(result = it.next()).done){
    retval.push(fn(result.value))
  }
  return retval
}

exports.filter = function(fn, obj){
  let it = iterator(obj)
  let retval = []
  let result
  while (!(result = it.next()).done){
    if (fn(result.value)){
      retval.push(result.value)
    }
  }
  return retval
}

exports.reduce = function(fn, currVal, obj){
  let it = iterator(obj)
  let result
  while (!(result = it.next()).done){
    currVal = fn(currVal, result.value)
  }
  return currVal
}

exports.first = function(lst){
  return list.get(lst, 0)
}

exports.last = function(lst){
  return list.get(lst, list.length(lst) - 1)
}