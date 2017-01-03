var unirest = require('unirest')
var setting = require('./setting')


module.exports = {

	getAllProvince: function() {
		return new Promise((resolve, reject) => {
			console.log('http://'+setting.account()+'.rajaongkir.com/'+ 
			setting.path() +'province?id=' + provinceId)
			unirest.get('http://'+setting.account()+'.rajaongkir.com/'+ 
			setting.path() +'province')
			.headers(setting.getKey())
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},

	getProvince: function(provinceId) {
		return new Promise((resolve, reject) => {
			console.log('http://'+setting.account()+'.rajaongkir.com/'+ 
			setting.path() +'province?id=' + provinceId)
			unirest.get('http://'+setting.account()+'.rajaongkir.com/'+ 
			setting.path() +'province?id=' + provinceId)
			.headers(setting.getKey())
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},

	getCities: function(provinceId) {
		return new Promise((resolve, reject) => {
			unirest.get('http://'+setting.account()+'.rajaongkir.com/'+ 
			setting.path() +'city?province=' + provinceId)
			.headers(setting.getKey())
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},

	getSubdistricts: function(cityId) {
			return new Promise((resolve, reject) => {
			unirest.get('http://'+setting.account()+'.rajaongkir.com/'+ 
			setting.path() +'subdistrict?city='+ cityId)
			.headers(setting.getKey())
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},


	getRestUrl: function(params) {
		return new Promise((resolve, reject) => {
			unirest.get('http://'+setting.account()+'.rajaongkir.com/'+ 
			setting.path() +setting.getPath(params))
			.headers(setting.getKey())
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},

	/**
	* @ params object {originId, destinationId, weight}
	*/
	getCost : function(params) {
		return new Promise((resolve, reject) => {
			console.log('http://'+setting.account()+'.rajaongkir.com/' + setting.path() +'cost')
			unirest.post('http://'+setting.account()+'.rajaongkir.com/' + setting.path() +'cost')
			.headers(setting.getHeaders())
			.send(setting.getCostInfo(params))
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},

	/**
	* @ params object {waybill, courier}
	*/
	getWaybill : function(params) {
		return new Promise((resolve, reject) => {
			unirest.post('http://'+setting.account()+'.rajaongkir.com/api/waybill')
			.headers(setting.getHeaders())
			.send(params)
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},

	getCountry : function(countryId) {
		return new Promise((resolve, reject) => {
			unirest.get('http://'+setting.account()+
			'.rajaongkir.com/api/v2/internationalDestination?id='+countryId)
			.headers(setting.getKey())
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	},
	/**
	* @ params object {origin, destination, weight, courier}
	*/
	getInternationalCost : function(params) {
		return new Promise((resolve, reject) => {
			unirest.post('http://'+setting.account()+'.rajaongkir.com/api/v2/internationalCost')
			.headers(setting.getHeaders())
			.send(params)
			.end(function (response) {
				if(response.error) {
					reject("Error connection " + response.error.message)
					return;
				}
				var body = response.body
				resolve(body)
			});
		})
	}


}

