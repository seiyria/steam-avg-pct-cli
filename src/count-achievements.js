var request = require('superagent');
var q = require('q');
var constants = require('./constants');
var _ = require('lodash');

var getLongestName = function(games) {
	return _.max(games, function(game) { return game.name.length; }).name.length;
};

var displayLowest = function(games, avgPct) {
	console.log('\nGames below the average (sorted by easiest to boost, numerically): ');

	var filtered = _.filter(games, function(game) {
		return game.percent < avgPct;
	});

	if(!filtered.length) {
		console.log('Congratulations, all of your games are 100%!');
		return;
	}

	var maxStrLen = getLongestName(filtered);

	var lowestSorted = _.sortBy(filtered, function(game) {
		return game.max - game.earned;
	});

	_.each(lowestSorted, function(game) {
		var earnedPctString = game.earned + '/' + game.max;
		console.log(_.padLeft(game.name, maxStrLen) + ': ' + _.padRight(earnedPctString, 9) + ' ' + game.percent.toFixed(2) + '%');
	});
};

var displayHighest = function(games, avgPct) {
	console.log('\nGames above (or at) the average (sorted by easiest to boost, numerically): ');

	var filtered = _.filter(games, function(game) {
		return game.percent >= avgPct && game.percent != 100;
	});

	if(!filtered.length) {
		console.log('Congratulations, all of your games above average are 100%!');
		return;
	}

	var maxStrLen = getLongestName(filtered);

	var highestSorted = _.sortBy(filtered, function(game) {
		return game.max - game.earned;
	});

	_.each(highestSorted, function(game) {
		var earnedPctString = game.earned + '/' + game.max;
		console.log(_.padLeft(game.name, maxStrLen) + ': ' + _.padRight(earnedPctString, 9) + ' ' + game.percent.toFixed(2) + '%');
	});
};

module.exports = function(achievements) {
	var countedAchievements = _.filter(achievements, function(game) { return game.earned > 0; });
	console.log('Found '+countedAchievements.length+' games that count for Avg. Completion Rate, sorting...');

	_.each(countedAchievements, function(achievement) {
		achievement.percent = achievement.earned/achievement.max * 100;
	})

	var avgPct = (_.sum(countedAchievements, 'percent') / countedAchievements.length);

	console.log('\nYour average percent: ' + Math.floor(avgPct) + '%');

	displayLowest(countedAchievements, avgPct);
	displayHighest(countedAchievements, avgPct);

};
