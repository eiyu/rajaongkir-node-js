
var http = require("http");
var qs = require('querystring');

const getRequest = function(options) {
  console.log(options)
  return new Promise((resolve, reject) => {
    var req = http.request(options, function (res) {
      var chunks = [];
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        var body = Buffer.concat(chunks);
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
    var req = http.request(headers, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
      res.on("end", function () {
        var body = Buffer.concat(chunks);
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
