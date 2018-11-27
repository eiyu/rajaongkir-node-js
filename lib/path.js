const compose = require('ramda/src/compose')
const map = require('ramda/src/map')
const objOf = require('ramda/src/objOf')
const typeErr = require('./typeErr')
const catchErr = require('./catchErr')
const typeValidation = require('./typeValidation')
const lensOverUrl = require('./lensOverUrl')

/**
 * headers:: Object -> Either(Object)
 */


const path = compose(
  map(objOf('path')),
  map(({type,url}) => type !== 'pro' ? `/${type}/${url[0]}` : `/api/${url[0]}`),
  map(lensOverUrl),
  catchErr,
  typeValidation,
  typeErr('String','suplied url', 'url'),
)

module.exports = path
