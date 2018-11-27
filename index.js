const compose = require('ramda/src/compose')
const pipeK = require('ramda/src/pipeK')
const map = require('ramda/src/map')
const has = require('ramda/src/has')
const curry = require('ramda/src/curry')
const prop = require('ramda/src/prop')
const makeOpt = require('./lib/makeOpt')
const logIfError = require('./lib/logError')
const request = require('./request')
const argsErr = require('./lib/argsErr')

const init = (account, apiKey, cb=request, opt=makeOpt) => {
  return {
    get: function(url, type=account, key=apiKey, call=cb, options=opt) {
          return arguments.length !== 1 ?
            argsErr:
            pipeK(
              logIfError,
              call('get',null)
            )(options('get',{type,key,url}))
          },
    post: function(url ,body, type=account, key=apiKey, call=cb, options=opt) {
            return arguments.length !== 2 ?
              argsErr:
              pipeK(
                logIfError,
                call('post',body)
              )(options('post',{body,type,key,url}))
            },
          }
        }

module.exports = init
