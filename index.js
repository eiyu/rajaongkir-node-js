const { map, Id, assignHostName, mapkey, assignPath, preparePath,i,assign } = require('./utils')
const requests = require('./request')
const GET = {"port" : null, "method":"GET"};
const POST = {"port" : null, "method":"POST"};
const got = require('got')
const init = (apiKey, type='starter', req= requests) => {

  const hostname = assignHostName(type)
  const headers = mapkey(apiKey)
  return(function(headers, hostname, type, req){
    const content = headers
    const {getRequest, postRequest, _request} = req
    return {
      get: (url, contentType=content, request= _request) => {
        const pathProperty = Id(url).map(preparePath(type)).map(assignPath)
        const options = Id(GET).map(assign(hostname, pathProperty.join(i)))
                        .map(assign(contentType(false)))
        return request('get',options.join(i))
      },
      post: (headers, forminput, contentType=content, request= _request) => {
        const cl = headers['content-length']
        const pathProperty = Id('/cost').map(preparePath(type)).map(assignPath)
        const hdrs = Id(POST).map(assign(hostname, pathProperty.join(i)))
                        .map(assign(contentType(cl)))
        return request('post',hdrs.join(i),forminput)
      }
    }
  })(headers, hostname, type, req)
}

module.exports = {
  init
}
