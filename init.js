/*!
 * Cleanly Format JSON. A mixin for Chocolat
 * Copyright(c) 2014 Irakli Nadareishvili
 * MIT Licensed
 */

var cj = require('cleanjson');

Hooks.addMenuItem('Actions/Javascript/JSON/Clean Formatting', 'cmd-alt-j', function() {
	Recipe.run(function(recipe) {
		
		var wordrange = r.wordRangeForRange(r.selection);
		var word = r.textInRange(wordrange);
		
		cj.clean(input, function(err, cleanJSON) {			
			if (!err) {
				recipe.replaceTextInRange(sel, cleanJSON);
			}			
		});

	});
});
