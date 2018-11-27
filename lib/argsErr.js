const logIfError = require('./logError')
const Left = require('./Left')

/**
 * catchErr:: args => Left(args)
 */

module.exports = (args) => logIfError(Left({error: 'post method needs only two arguments path and body'}))(args)
