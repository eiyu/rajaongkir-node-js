# rajaongkir-node-js
[![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg)](https://github.com/eiyu/rajaongkir-node-js)

Package ini dapat digunakan untuk membuat rest client pada web app anda dan sudah dicoba di framework [express](https://github.com/expressjs/express) dan berjalan dengan baik.

# instalasi
npm install rajaongkir-node-js

# Penggunaan

1. Setelah package ini terinstall masuk ke direktori /node_modules/rajaongkir-node-js.
2. Buka setting.js dengan text editor anda.
3. Ganti api key dan tipe akun anda.
4. Jika anda menggunakan akun pro anda bisa mengubah settingan originType dan destinationType menjadi subdistrict. Info lebih lanjut bisa kunjungi [Rajaongkir](http://rajaongkir.com/dokumentasi/pro).

# Contoh Penggunaan di express js

Menggunakan promise

```javascript
//dependencies
var express = require('express')
var router = express.Router()
var ongkir = require('rajaongkir-node-js')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})
var request = ongkir('api-key-anda', 'tipe-akun', 'courier')

//express
var app = express()
	app.use('/', router)

	router.get('/api/:query', function(req, res) {
		const location = request.get(req.url)
		location.then(loc => {
				res.write(loc)
				res.end()
		})
	})

	router.get('/api/:locationType/:query', function(req, res) {
		const location = request.get(req.url)
		location.then(loc => {
				res.write(loc)
				res.end()
		})
	})

	router.post('/api/cost',urlencodedParser, function(req, res) {
		const cost = request.post(req.body, req.headers)
		cost.then(cost => {
			res.write(cost)
			res.end()
		})
	})

// node server
var server = app.listen(8080, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("server berjalan di http://localhost:8080")
})
```
# Dokumentasi API
Setiap request me-return promise<br/>

get method memerlukan parameter url
request.get(url)

post method memerlukan request body dan request headers
request.post(body, headers)
