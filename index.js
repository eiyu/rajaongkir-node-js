const { map, Id, assignHostName, mapkey, assignPath, preparePath,assign,without,contentLength } = require('./utils')
const {_request} = require('./request')
const GET = {"port" : null, "method":"GET"};
const POST = {"port" : null, "method":"POST"};
const init = (apiKey, type='starter', req= _request) => {

  const hostname = assignHostName(type)
  const headers = mapkey(apiKey)
  return(function(headers, hostname, type, req){
    return {
      get: (url, contentType=headers, request= req) => {
        const pathProperty = Id(url).map(preparePath(type)).map(assignPath)
        const options = Id(GET).map(assign(hostname, pathProperty.val()))
                        .map(assign(contentType(false)))
        return request('get',options.val())
      },
      post: (forminput, body=undefined, contentType=headers, request= _request) => {
        const cl = without(Id(body)).map(assign(contentLength(forminput))) || Id(body['content-length'])
        const pathProperty = Id('/cost').map(preparePath(type)).map(assignPath)
        const hdrs = Id(POST).map(assign(hostname, pathProperty.val()))
                        .map(assign(contentType(cl.val()['content-length'])))
        return request('post',hdrs.val(),forminput)
      }
    }
  })(headers, hostname, type, req)
}

module.exports = {
  init
}
