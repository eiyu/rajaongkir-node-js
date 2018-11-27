const queryString = require('queryString')
const objOf = require('ramda/src/objOf')
const merge = require('ramda/src/merge')
const compose = require('ramda/src/compose')
const prop = require('ramda/src/prop')
const contentLength = obj => Buffer.byteLength(queryString.stringify(obj))
/**
 * postContents:: [a,b] -> {a,b}
 */

module.exports = ([key,...body]) => {
  const apiKey = objOf("key")
  const propContents = compose(
    merge({"content-type": "application/x-www-form-urlencoded"}),
    objOf("content-length"),
    contentLength,
  )
  return merge(apiKey(key),propContents(...body))
}
