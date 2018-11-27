const compose = require('ramda/src/compose')
const merge = require('ramda/src/merge')
const map = require('ramda/src/map')
const liftN = require('ramda/src/liftN')
const hostname = require('./hostname')
const headers = require('./headers')
const path = require('./path')
const combine = arr => (liftN(3,(a,b,c) => merge(a,merge(b,c)))(...arr))

/**
 * makeOpt:: string -> (Object -> (Id Object|| Left Object))
 */

module.exports = (m,input) => {
    return compose(
      map(merge({method: m === 'post' ? 'POST' : 'GET', port: null})),
      combine,
      map(x => x(input))
    )([path,hostname,headers(m)])
}
