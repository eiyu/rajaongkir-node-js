
const http = require("http");
const qs = require('querystring');

const getRequest = function(options) {
  console.log(options)
  return new Promise((resolve, reject) => {
    const req = http.request(options, function (res) {
      const chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);
          resolve(body.toString());
      });
    });
    req.on("error", function(error) {
      resolve(error.message)
    })
    req.end();
  })
}

const postRequest = (body, headers) => {
  return new Promise((resolve, reject) => {
    const req = http.request(headers, function (res) {
      const chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        const body = Buffer.concat(chunks);
          resolve(body.toString())
      });
    });
    req.write(qs.stringify(body));
    req.on("error", function(error) {
      resolve(error.message)
    })
    req.end();
  })
}
const requests = {getRequest,postRequest}

module.exports = requests
