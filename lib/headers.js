const map = require('ramda/src/map')
const compose = require('ramda/src/compose')
const props = require('ramda/src/props')
const prop = require('ramda/src/prop')
const objOf = require('ramda/src/objOf')
const has = require('ramda/src/has')
const typeErr = require('./typeErr')
const getContents = require('./getContents')
const postContents = require('./postContents')
const catchErr = require('./catchErr')

/**
 * headers:: string -> (Object -> Either(Object))
 */

module.exports = (rType) => rType === 'post' ?
  compose(
    map(objOf('headers')),
    map(postContents),
    map(props(['key','body'])),
    catchErr,
    // typeErr('Object', 'body', 'body'),
    typeErr('String', 'apikey', 'key')
  ) :
    compose(
      map(objOf('headers')),
      map(getContents),
      map(prop('key')),
      catchErr,
      typeErr('String','apiKey','key'),
    )
