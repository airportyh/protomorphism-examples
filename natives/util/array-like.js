
exports.isArrayLike = isArrayLike
function isArrayLike(obj){
  if (!obj) return false
  return typeof obj.length === 'number'
}

function ArrayLikeIterator(obj){
  this.obj = obj
  this.idx = 0
}

ArrayLikeIterator.prototype.next = function(){
  return {
    done: this.idx >= this.obj.length,
    value: this.obj[this.idx++]
  }
}

exports.Iterator = ArrayLikeIterator