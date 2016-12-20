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

/**
* @ restfull
*
* 	mendapatkan daftar kota pada suatu provinsi
* @ /city/province/id
*
* 	mendapatkan daftar kecamatan pada suatu kota
* @ /subdistrict/city/id
*/
var somePath = ongkir.getRestUrl({param1:'city', param2:'province', param3:'12'})
somePath.then(function(data) {
	console.log(data)
})


//TARIF LOKAL
// mendapatkan harga ongkos kirim
var someCost = ongkir.getCost({origin:'1', destination:'2', weight: '1000'})
someCost.then(function(data) {
	console.log(data)
})


// CEK RESI
var waybill = ongkir.getWaybill({waybill:'SOCAG00183235715', courier:'jne'})
waybill.then(function(data) {
	console.log(data)
})

// // INTERNATIONAL DESTINATION 
// var country = ongkir.getCountry('100')
// country.then(function(data) {
// 	console.log(data)
// })


//TARIF INTERNASIONAL
// mendapatkan daftar kecamatan di suatu kota berdasarkan id kota tipe value string
// var internationalCost = ongkir.getInternationalCost({ 
//   origin: '152',
//   destination: '108',
//   weight: 1400,
//   courier: 'tiki' 
// })
// internationalCost.then(function(data) {
// 	console.log(data)
// })