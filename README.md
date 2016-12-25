# rajaongkir-node-js

Package ini menggunakan [unirest](https://github.com/Mashape/unirest-nodejs) dapat digunakan untuk membuat rest client pada web app anda dan sudah dicoba di framework [express](https://github.com/expressjs/express) dan berjalan dengan baik.

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

//express
var app = express()
	app.use('/', router)

	router.get('/province/:id', function(req, res) {
		var a = ongkir.getCity(param.id)
		a.then(function(data) {
			res.send(data['rajaongkir']['results'])
			res.end()
		})

	})

	router.post('/form',urlencodedParser,function(req, res) {
		console.log(req.body)
		var params = req.body
		var a = ongkir.getCost(params)
		a.then(function(val) {
			// console.log(val)
			res.json(val)
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
