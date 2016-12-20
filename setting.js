
/**
 * Penjelasan param getCost
 * @params Object
 * @params.origin:
 * @params.destination:
 * @params.originType tolong diperhatikan agar tidak salah 
 * @params.destinationType tolong diperhatikan agar tidak salah 
 * @params.weight
 * @params.courier
 */


module.exports = {
	getCostInfo: function(params) {

	var settings = {
	  origin: params.origin,
	  // setting tipe asal pengiriman
	  originType: 'city',
	  destination: params.destination,
	  // setting tipe tujuan 
	  destinationType: 'city',
	  weight: params.weight,
	  // setting courier contoh : 'jne:wahana:pos:jnt'
	  courier: 'jne:wahana:pos:jnt' 
	}


	return settings
},

	getPath: function(params) {
	return params.param1+'?'+params.param2+'='+params.param3
},

	getKey: function() {
	//api key anda
	return {"key": "api-key-anda"} // setting api key anda disini
},

	getHeaders: function() {
	return {
	    "key": "api-key-anda", // setting api key anda disini
	    "content-type": "application/x-www-form-urlencoded"
	}
},

	account: function() {
		return 'starter' // setting akun anda disini	
	}
}
