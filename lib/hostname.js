
const compose = require('ramda/src/compose')
const map = require('ramda/src/map')
const objOf = require('ramda/src/objOf')
const prop = require('ramda/src/prop')
const typeErr = require('./typeErr')
const catchErr = require('./catchErr')
/**
 * headers:: Object -> Either(Object)
 */


const hostname = compose(
  map(objOf('hostname')),
  map((type) => type !== 'pro' ? 'api.rajaongkir.com' : 'pro.rajaongkir.com'),
  map(prop('type')),
  catchErr,
  typeErr('String', 'account type', 'type'),
)

module.exports = hostname
