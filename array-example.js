require('./natives')
var list = require('./protocols/list')
var _ = require('./dash')

var names = ['Bob', 'Mary', 'James']
console.log(list.get(names, 1))
console.log('There are', list.length(names), 'names.')

console.log(_.first(names))
console.log(list.length(names))
console.log(_.last(names))