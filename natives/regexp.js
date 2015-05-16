var Pattern = require('../protocols/pattern')

Pattern.implementation(RegExp, {
  matches: function(regexp, str){
    return !!regexp.test(str)
  }
})