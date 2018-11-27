const curry = require('ramda/src/curry')
const contains = require('ramda/src/contains')
const merge = require('ramda/src/merge')
/**
 * typeValidation :: Object -> (Object || Error Object)
 */

module.exports = (obj) => {
  const types = ['basic', 'starter', 'pro']
  const res = types.filter((t) => {
    return obj.type === t
  }, [])
  return res.length !== 0 ? obj :
  merge(obj,{error: `InputError: your input is ${obj.type}!! ,expect a "basic" / "starter" / "pro" input for account type`})
}
