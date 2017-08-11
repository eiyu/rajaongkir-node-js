# rajaongkir-node-js
[![Github All Releases](https://img.shields.io/badge/downloads-303-green.svg)](https://github.com/eiyu/rajaongkir-node-js)

Package ini dapat digunakan untuk membuat rest client pada web app anda dan sudah dicoba di framework [express](https://github.com/expressjs/express) dan berjalan dengan baik.

# instalasi
npm install rajaongkir-node-js

# Penggunaan
Inisialisasi
```javascript
const rajaongkir = require('rajaongkir-node-js')
// masukan api-key tipe akun
const request = rajaongkir('api-key', 'starter')
```

request object memiliki dua method, get dan post
```javascript
get(path)

post(body[,headers[,path]])
```

Package ini mengikuti endpoint yang sama dengan dokumentasi di [rajaongkir](http://rajaongkir.com), akan tetapi path pertama bebas mengunakan nama apa saja.


# Contoh Penggunaan di express js

Menggunakan promise

```javascript
// server
//dependencies
const express = require('express')
const router = express.Router()
const rajaongkir = require('rajaongkir-node-js')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const request = rajaongkir('api-key', 'starter')

//express
var app = express()
  app.use('/', router)

  router.post('/bebas/:query',urlencodedParser, function(req, res) {
    const {body, headers, path} = req
    const cost = request.post(body, headers, path)
    cost.catch(err => err).
      then(cost => {
      res.write(cost)
      res.end()
    })
  })

  router.post('/bebas/:path/:query',urlencodedParser, function(req, res) {
    const {body, headers, path} = req
    const waybill = request.post(body, headers, path)
    waybill.catch(err => err).
      then(waybill => {
        res.write(waybill)
        res.end()
    })
  })

  router.get('/bebas/:query', function(req, res) {
    const location = request.get(req.url)
    location.catch(err => console.log(err))
      .then(loc => {
        res.write(loc)
        res.end()
    })
  })

  router.get('/bebas/:path/:query', function(req, res) {
    const location = request.get(req.url)
    location.catch(err => console.log(err))
      .then(loc => {
        res.write(loc)
        res.end()
    })
  })

// node server
var server = app.listen(8080, function() {
	console.log("server berjalan di http://localhost:8080")
})

```

# Contoh request

contoh dengan fetch API
```javascript
fetch('http://localhost:8080/bebas/cost', {method:'POST', body: "origin=123&destination=234&originType=subdistrict&destinationType=subdistrict&weight=1200&courier=pos", headers:{"content-type": "application/x-www-form-urlencoded"}}).then(x => x.json()).then(x => console.log(x))

```

menggunakan http library
```javascript
const unirest = require('unirest')
unirest.post('http://localhost:8080/bebas/cost')
.headers({
  "content-type": "application/x-www-form-urlencoded"
})
.send({
  origin: 12,
  originType: 'subdistrict',
  destination: 13,
  destinationType: 'subdistrict',
  weight: 1700,
  courier: "jnt"
})
.end(function (response) {
  console.log(response.body)
});
}
```
