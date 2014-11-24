/*!
 * Cleanly Format JSON. A mixin for Chocolat
 * Copyright(c) 2014 Irakli Nadareishvili
 * MIT Licensed
 *
 * @see: http://chocolatapp.com/blog/?chocolat-node
 * @see: http://mixins.chocolatapp.com/docs/
 */

var cj = require('cleanjson');

Hooks.addMenuItem('Actions/JavaScript/JSON/Clean Formatting', 'cmd-alt-j', function() {
	Recipe.run(function(recipe) {
		
		var sel = (!recipe.selection.length)? new Range(0, recipe.length) : recipe.selection
			, output = ''
			, text = recipe.textInRange(sel);
			
		cj.clean(text, function(err, output) {
			if (!err)	{
				recipe.replaceTextInRange(sel, output);
			} else {
				Alert.show('Malformed JSON. Please fix and try again.');
			}
		});		

	});
});
