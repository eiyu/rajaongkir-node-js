/**
 *
 * Left:: a -> Left(a)
 */
const Left = val => ({
  valueOf() {return val},
  map(fn) {
    return Left(val)
  },
  ap(otherF) {
    return Left(val)
  },
  chain(fn) {
    return fn(val)
  },
})
module.exports = Left
