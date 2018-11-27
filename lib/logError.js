const chain = (mmA) => mmA.chain()
const compose = require('ramda/src/compose');
const map = require('ramda/src/map');
const has = require('ramda/src/has');


/**
 * logIfError:: Either(a) -> Either(a)
 */


const logIfError = either => {
  return has('error',either.valueOf()) ?
   compose((x => {console.log('\x1b[31m%s\x1b[0m', x.valueOf().error); return x}))(either):
   either
}

module.exports = logIfError
