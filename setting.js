
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

var apiKey = 'api-key';
var accountType = 'starter';
var originType = 'city';
var destinationType = 'city';
var courier = 'jne' 

module.exports = {
	getCostInfo: function(params) {
	var settings = {
	  origin: params.origin,
	  originType: originType,
	  destination: params.destination,
	  destinationType: destinationType,
	  weight: params.weight,
	  courier: courier
	}
	return settings
},

	getPath: function(params) {
	return params.param1+'?'+params.param2+'='+params.param3
},

	getKey: function() {
	return {"key": apiKey} 
},

	getHeaders: function() {
	return {
	    "key": apiKey, 
	    "content-type": "application/x-www-form-urlencoded"
	}
},

	path: function() {
		if(accountType == 'pro') {
			return 'api/'
		} 
		if(accountType == 'starter') {
			return 'starter/'
		}
		if(accountType == 'basic') {
			return 'basic/'
		}
	},

	account: function() {
		if(accountType == 'pro') {
			return 'pro'
		}
		else {
			return 'api'
		}
	}
}
