var request = require('superagent');
var q = require('q');
var constants = require('./constants');

module.exports = function(argv, steamid) {
	console.log('Getting games for steam64id: '+steamid+'...');

	var defer = q.defer();

	var requestObj = require('./req-obj')(argv);
	requestObj.steamid = steamid;
	requestObj.include_played_free_games = 1;

	request
		.get(constants.STEAM_URL.ALL_GAMES)
		.query(requestObj)
		.end(function(e, res) {
			if(e) {
				console.error(e);
				process.exit(0);
			}

			var body = res.body.response;

			if(!body.games) {
				console.error('No games were found on your profile. Is your steam id correct?');
				process.exit(0);
			}

			defer.resolve(res.body.response.games);
		});

	return defer.promise;
};