"use strict"

const Person = require('./person')
const print = require('./print')
const _ = require('./dash')
const matches = require('./pattern').matches
require('./object')
require('./array')
require('./string')
require('./generator')
require('./regexp')
let anna = new Person('Anna', 14)
let bob = {name: 'Bob'}

print(anna)
print(bob)

_.each(function(n){
  console.log(n)
}, [1, 2, 3])

console.log(_.filter(function(n){
  return n % 2 === 1
}, [1, 2, 3]))

let sum = _.reduce(
  function(curr, n){ return n + curr },
  0, 
  [1, 2, 3])
console.log(sum)

function f(){
  return _.filter(function(n){
    return n % 2 === 0
  }, arguments)
}

console.log(f(1, 2, 3, 4, 5))

let reversed = _.reduce(function(curr, ch){
  return ch + curr
}, "", "Hello, world!")
console.log(reversed)

function* oneToFive(){
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

_.each(function(n){
  console.log(n)
}, oneToFive())

console.log(matches(['angularjs', 'angular'], 'angular'))
console.log(matches(/^angular(js)?$/, 'angular.js'))
console.log(matches('angularjs', 'angularjs'))