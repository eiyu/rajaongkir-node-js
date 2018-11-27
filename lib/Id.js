/**
 * Id:: a -> Id(a)
 */

const Id = val => ({
  valueOf() {return val},
  map(fn) {
    return Id(fn(val))
  },
  ap(otherF) {
    return otherF.map(val)
  },
  chain(fn){
    return fn(val)
  }
})

module.exports = Id
