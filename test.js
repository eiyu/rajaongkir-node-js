var ongkir = require('./ongkir')

var someProvince = ongkir.getProvince('12')

// mendapatkan sebuah province berdasarkan id provinsi
someProvince.then(function(data) {
	console.log(data)
})

// mendapatkan daftar kota di suatu provinsi berdasarkan id provinsi
var someCities = ongkir.getCities('12')

someCities.then(function(data) {
	console.log(data)
})

// mendapatkan daftar kecamatan di suatu kota berdasarkan id kota
var someSubdistricts = ongkir.getSubdistricts('12')

someProvince.then(function(data) {
	console.log(data)
})


// mendapatkan daftar kecamatan di suatu kota berdasarkan id kota
var someSubdistricts = ongkir.getSubdistricts('12')

someProvince.then(function(data) {
	console.log(data)
})


// mendapatkan daftar kecamatan di suatu kota berdasarkan id kota tipe value string
var someCost = ongkir.getCost({origin:'1', destination:'2', weight: '1000'})

someCost.then(function(data) {
	console.log(data)
})