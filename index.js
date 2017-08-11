const request = require('./request')
const _with = require('./util')
const init = (api, type='starter') => {
  return (function(api, type) {
    const {getRequest, postRequest} = request
    const headers = {
      "port": null,
      "hostname": type === 'pro' ? `pro.rajaongkir.com`: `api.rajaongkir.com`,
    }
    // add key value pairs to headers
    const headersWith = _with(api)(type)(headers)
    return {
      get: (url) => {
        const method = {"method": "GET"}
    		const path = url.split('/').reverse()
        const [a,b,...rest] = path
        const finalHeaders = path.length <= 3 ?
          headersWith(`/${a}`)(method):
          headersWith(`/${b}/${a}`)(method)
        return getRequest(finalHeaders)
      },
      post: (body, head, url) => {
        const method = {"method": "POST"}
    		const path = url.split('/').reverse()
        const [a,b,...rest] = path
        const finalHeaders = path.length <= 3 ?
          headersWith(`/${a}`)(method):
          headersWith(`/${b}/${a}`)(method)
        console.log(options)
        Object.assign(options.headers, head)
        return postRequest(body, finalHeaders)
      }
    }
  })(api, type)
}

const rajaongkir = init

module.exports = rajaongkir
