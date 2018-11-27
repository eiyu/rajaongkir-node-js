const http = require("http");
const qs = require('querystring');
const {Future} = require('fluture')
const curry = require('ramda/src/curry')

const request = curry(function(method, forminput, headers) {
  return Future( function computation(reject, resolve) {
      const req = http.request(headers, function (res) {
        let chunks = [];
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
        res.on("end", function () {
          const body = Buffer.concat(chunks);
          const result = JSON.parse(body)
          if(result.rajaongkir.status.code === 400) {
            resolve(result)
          }
          resolve(result)
        });
      });
      ((requestedMethod) => {requestedMethod === 'post' ? req.write(qs.stringify(forminput)) : void 0 })(method)
      req.on("error", function(error) {
        resolve(error)
      })
      req.end();
  })
})


module.exports = request
