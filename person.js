var Show = require('./protocols/show')

function Person(name, age){
  this.name = name
  this.age = age
}

Show.implementation(Person, {
  show: function(person){
    return person.name + '{' + person.age + '}'
  }
})

module.exports = Person
