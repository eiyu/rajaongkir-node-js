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
const express = require('express')
const router = express.Router()
const rajaongkir = require('./p.js')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const request = rajaongkir('api-key', 'starter', 'jne:pos')

//express
var app = express()
	app.use('/', router)

	router.post('/api/:query',urlencodedParser, function(req, res) {
	const {body, headers, path} = req
		const cost = request.post(body, headers, path)
		cost.catch(err => err).
			then(cost => {
				res.write(cost)
				res.end()
		})
	})

	router.post('/api/:path/:query',urlencodedParser, function(req, res) {
		const {body, headers, path} = req
		console.log('ac ', body, headers, path)
		const waybill = request.post(body, headers, path)
		waybill.catch(err => err).
			then(waybill => {
				res.write(waybill)
				res.end()
		})
	})

	router.get('/api/:query', function(req, res) {
		const location = request.get(req.url)
		location.catch(err => console.log(err))
			.then(loc => {
				res.write(loc)
				res.end()
		})
	})

	router.get('/api/:path/:query', function(req, res) {
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
# Dokumentasi API

Sedang ditulis
