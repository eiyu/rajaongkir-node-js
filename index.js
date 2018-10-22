const {Id, assignHostName, mapkey, assignPath, preparePath,assign,without,contentLength } = require('./utils')
const {_request} = require('./request')
const GET = {"port" : null, "method":"GET"};
const POST = {"port" : null, "method":"POST"};
const init = (apiKey, accountType='starter', req= _request) => {
  const hostnameWithType = assignHostName(accountType)
  const headersWithApiKey = mapkey(apiKey)
  return(function(headers, hostname, type, request){
    return {
      get: (url, contentType=headers, invokeRequest= request) => {
        const pathProperty = Id(url).map(preparePath(type)).map(assignPath)
        const options = Id(GET).map(assign(hostname, pathProperty.val()))
                        .map(assign(contentType(false)))
        return invokeRequest('get',options.val())
      },
      post: (forminput, body=null, contentType=headers, invokeRequest= request) => {
        const cl = body ? Id(body) :
                          without(Id(body)).map(assign(contentLength(forminput)))
        const pathProperty = Id('/cost').map(preparePath(type)).map(assignPath)
        const hdrs = Id(POST).map(assign(hostname, pathProperty.val()))
                        .map(assign(contentType(cl.val()['content-length'])))
        return invokeRequest('post',hdrs.val(),forminput)
      }
    }
  }(headersWithApiKey, hostnameWithType, accountType, req))
}

module.exports = {
  init
}
