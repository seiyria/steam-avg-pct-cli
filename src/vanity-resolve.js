var request = require('superagent');
var q = require('q');
var constants = require('./constants');

module.exports = function(argv) {

	var defer = q.defer();

	var steamId = argv['steam-id'];

	if(steamId) return q(steamId);

	var vanityUrl = argv['vanity-url'];

	if(!vanityUrl) {
		console.error('Either --vanity-url or --steam-id needs to be passed in. Exiting.');
		process.exit(0);
	}

	var requestObj = require('./req-obj')(argv);
	requestObj.vanityurl = vanityUrl;

	console.log('Resolving vanity url "'+vanityUrl+'"...');

	request
		.get(constants.STEAM_URL.VANITY)
		.query(requestObj)
		.end(function(e, res) {
			if(e) {
				console.error(e);
				process.exit(0);
			}
			defer.resolve(res.body.response.steamid);
		});

	return defer.promise;
}