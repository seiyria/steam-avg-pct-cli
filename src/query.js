
var argv = require('minimist')(process.argv.slice(2));

/**
  * @arg --vanity-url the steam vanity url to get percentages for (resolved to a steam-id)
  * @arg --steam-id the steam id to get percentages for
  * @arg --api-key the api key used when making requests
*/

if(!argv['api-key']) {
	console.error('No --api-key specified. Exiting.');
	process.exit(0);
}

require('./vanity-resolve')(argv)
	.then(function(id) { return require('./get-games')(argv, id)
		.then(function(games) { return require('./aggregate-achievements')(argv, id, games); })
		.then(require('./count-achievements')); 
	})
	.catch(function(e) { console.error(e); });