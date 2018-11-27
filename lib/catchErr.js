const has = require('ramda/src/has')
const Id =require('./Id')
const Left =require('./Left')

/**
 * catchErr:: Object => (Left(obj) || Id(obj))
 */

module.exports = (obj) => {
  return has('error', obj) ? Left(obj) : Id(obj)
}
