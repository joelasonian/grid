Grid
====

The CSS Grid jQuery plugin applies Grid CSS to DOM elements based on the naming convention of [Grid - a minimal CSS Grid Utility](http://brajeshwar.com/2011/grid-a-minimal-css-grid-utility/) - By [Brajeshwar](http://brajeshwar.com/author/brajeshwar/).

Usage
-----
* Include the jquery.cssgrid.js plugin, along with jQuery
* Add a class "grids" to the container of elements you would like to apply the Grid CSS styles.
* Define your desired grid size by applying "gxofy" where "x" is the segment of the "y" whole.
* Invoke the plugin on document ready

	$(document).ready(function() {
		$.cssGrid($('.grids'));
	});

Alternative String
------------------
By default the plugin looks for the starting character "g" and the string seperator "of". These are customizable.

Example:

	$(document).ready(function() {
		$.cssGrid($('.grids'), {
			startString: 'g',
			seperatorString: 'of'
		});
	})