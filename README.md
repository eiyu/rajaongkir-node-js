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
		var a = ongkir.getProvince(param.id)
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
# Dokumentasi API
Menggunakan promise<br/>
semua parameter harus bertipe string!


## Mengambil data semua provinsi

parameter yg diperlukan: tidak ada
```javascript
var provinces = ongkir.getAllProvince()
provinces.then(function(prov) {
	console.log(prov)
})
```

## Mengambil data sebuah provinsi

parameter yg diperlukan: id provinsi
```javascript
var province = ongkir.getProvince(id)
province.then(function(prov) {
	console.log(prov)
})
```

## Mengambil data semua kota pada sebuah provinsi
parameter yg diperlukan : id provinsi
```javascript
var cities = ongkir.getCities(id)
cities.then(function(city) {
	console.log(city)
})
```

## Mengambil data semua kecamatan pada sebuah kota
parameter yg diperlukan: id city
```javascript
var subdistricts = ongkir.getSubdistricts(id)
subdistricts.then(function(subdistrict) {
	console.log(subdistrict)
})
```

## Mengambil data semua kecamatan pada sebuah kota dengan rest url
parameter yg diperlukan: 
```javascript
urlObj: {
		param1:'city', // tipe string 
		param2:'province', // tipe string 
		param3:'14' // tipe string id kota
		}
```
```javascript
var subdistricts = ongkir.getRestUrl(urlObj)
cities.then(function(subdistrict) {
	console.log(subdistrict)
})

```


## Mengambil data ongkos kirim
kurir yg diinginkan dll bisa di setting seperti pada yang sudah dijelaskan di bagian penggunaan
parameter yg diperlukan:
```javascript
dataObj: {
		origin: '', // tipe string id kota atau kecamatan
		destination: '', // tipe string id kota atau kecamatan
		weight:'' // tipe string berat kiriman
	    }
```

```javascript
var costs = ongkir.getCost(dataObj)
costs.then(function(cost) {
	console.log(cost)
})

```


## Mengambil data resi
parameter yg diperlukan:
kurir yg diinginkan dll bisa di setting seperti pada yang sudah dijelaskan di bagian penggunaan
```javascript
dataObj: {
		waybill: '', // tipe string resi 
		courier: '' // tipe string nama kurir
	    }
```

```javascript
var waybill = ongkir.getWaybill(dataObj)
waybill.then(function(resi) {
	console.log(resi)
})

```