var show = require('./protocols/show').show

module.exports = function(thing){
  console.log(show(thing))
}