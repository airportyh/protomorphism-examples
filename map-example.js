"use strict"
require('./natives')
const map = require('./protocols/map')
const name = Symbol('name')

const bob = {}
const robert = new Map
const william = new WeakMap

map.set(bob, name, 'Bob')
map.set(william, name, 'Bill')
map.set(robert, name, 'Robert')
console.log(map.get(bob, name))
console.log(map.get(robert, name))
console.log(map.get(william, name))