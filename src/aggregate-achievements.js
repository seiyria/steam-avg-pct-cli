var request = require('superagent');
var q = require('q');
var constants = require('./constants');
var _ = require('lodash');

module.exports = function(argv, steamid, games) {
	console.log('Found games: '+games.length+' (not all of these will count)');

	var promises = [];

	_.forEach(games, function(game) {
		var defer = q.defer();
		promises.push(defer.promise);

		var requestObj = require('./req-obj')(argv);
		requestObj.steamid = steamid;
		requestObj.appid = game.appid;

		request
			.get(constants.STEAM_URL.ACHIEVEMENTS)
			.query(requestObj)
			.end(function(e, res) {
				//swallow errors here, they don't matter
				var body = res.body.playerstats;

				if(body.error || !body.achievements) {
					return defer.resolve({max: 0, earned: 0});
				}

				defer.resolve({
					name: body.gameName,
					max: body.achievements.length,
					earned: body.achievements.reduce(function(prev, cur) { return prev + cur.achieved; }, 0)
				});
			});
	});

	return q.all(promises);
};