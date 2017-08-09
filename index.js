const request = require('./request')
const _with = require('./util')
const init = (api, type='starter', courier='jne') => {
  return (function(api, type, courier) {

    const {getRequest, postRequest} = request
    const options = {
      "port": null,
      "hostname": type === 'pro' ? `pro.rajaongkir.com`: `api.rajaongkir.com`,
    }
    const optionsWith = _with(api)(type)(options)
    return {
      get: (url) => {
        const method = {"method": "GET"}
    		const path = url.split('/').reverse()
        const [a,b,...rest] = path
        const opt = path.length <= 3 ?
          optionsWith(`/${a}`)(method):
          optionsWith(`/${b}/${a}`)(method)
        return getRequest(opt)
      },
      post: (body, head, url) => {
        const method = {"method": "POST"}
    		const path = url.split('/').reverse()
        const [a,b,...rest] = path
        const opt = optionsWith(`/${b}/${a}`)(method)
        console.log(opt)
        Object.assign(opt.headers, head)
        return postRequest(body, opt)
      }
    }
  })(api, type,courier)
}

const rajaongkir = init

module.exports = rajaongkir
