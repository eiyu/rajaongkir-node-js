# rajaongkir-node-js
[![Github All Releases](https://img.shields.io/badge/downloads-303-green.svg)](https://github.com/eiyu/rajaongkir-node-js)

Package ini dapat digunakan untuk membuat rest client pada web app anda dan sudah dicoba di framework [express](https://github.com/expressjs/express) dan berjalan dengan baik.

# instalasi
npm install rajaongkir-node-js

# Penggunaan
Inisialisasi
```javascript
const {init} = require('rajaongkir-node-js')
// masukan api-key tipe akun
const request = init('api-key', 'starter')
```

request object memiliki dua method, get dan post
```javascript
get(path)

post(data)
```

Package ini mengikuti endpoint yang sama dengan dokumentasi di [rajaongkir](http://rajaongkir.com), akan tetapi path pertama bebas mengunakan nama apa saja.


# Contoh Penggunaan di express js

Menggunakan promise

```javascript
// server
//dependencies
const express = require('express')
const router = express.Router()
const {init} = require('rajaongkir-node-js')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: false})
const request = init('apiKey', 'starter')
//express
var app = express()
	app.use('/', router)

	router.post('/path/:cost',urlencodedParser, function(req, res) {
	const {body} = req
		const cost = request.post(body)
		cost.then(x => {
				res.write(x)
				res.end()
		}
	)
});

	router.get('/path/:query', function(req, res) {
		const{url} = req
		const regionType = request.get(url)
		regionType.then(x => {
				res.write(x)
				res.end()
		}
		)
	})

	router.get('/path/:region/:query', function(req, res) {
		const{url} = req
		const regionType = request.get(url)
		regionType.then(x => {
				res.write(x)
				res.end()
		}
		)
	})

		router.get('/form', function(req, res) {
			res.send(`
					<html>
						<head>
						<title> testing form </title>

						<script>
						const submit = () => {
						document.getElementById('form').submit()
						console.log('submit')
						}

						</script>
						</head>
						<body>
							<form id="form" action="path/cost" method="post">
								<input name="origin" type="number" placeholder="input id kota origin" /> <br/>
								<input name="originType" type="text" placeholder="tipe kota origin" /> <br/>
								<input name="destination" type="number" placeholder="input id kota tujuan" /> <br/>
								<input name="destinationType" type="text" placeholder="tipe kota tujuan" /> <br/>
								<input name="weight" type="integer" placeholder="masukan berat (gr)" /> <br/>
								<input name="courier" type="text" placeholder="periksa ongkir" /> <br/>
								<input type="submit" onclick="submit()"> Submit </input>
							</form>
						</body>
					</html>
				`)
			res.end()
		})

// node server
var server = app.listen(8080, function() {
	console.log("server berjalan di http://localhost:8080")
})

```
