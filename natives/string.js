var Iterable = require('../protocols/iterable')
var Pattern = require('../protocols/pattern')

Iterable.implementation(String, {
  iterator: function(str){
    return new StringIterator(str)
  }
})

Pattern.implementation(String, {
  matches: function(pattern, str){
    return pattern === str
  }
})

function StringIterator(str){
  this.str = str
  this.idx = 0
}

StringIterator.prototype.next = function(){
  return {
    done: this.idx >= this.str.length,
    value: this.str.charAt(this.idx++)
  }
}