const curry = require('ramda/src/curry')
const prop = require('ramda/src/prop')
const type = require('ramda/src/type')
const merge = require('ramda/src/merge')

/**
 * error handling
 * typeErr:: string -> (string -> (string -> (object -> error object|| object))))
 */

module.exports = curry((expectedType, message,propToBeChecked,obj) => {
        return type(prop(propToBeChecked,obj)) !== expectedType ? (merge({
          error: propToBeChecked !== 'type' ?
                `InputError: expect a ${expectedType} for ${message} not a/n ${type(prop(propToBeChecked,obj))}`:
                `InputError: expect a "basic" / "starter" / "pro" input for ${message} not a/n ${type(prop(propToBeChecked,obj))}`
        },obj)) : obj
      }
    )
