// create contents for get method
const objOf = require('ramda/src/objOf')
const merge = require('ramda/src/merge')

/**
 * getContents:: String a -> {a}
 */

module.exports = (key) => {
  return objOf("key")(key)
}
