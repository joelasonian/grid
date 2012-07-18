/**
* CSS Grid jQuery plugin
* 10/05/2011 v.01
* 
* This jQuery plugin applies Grid CSS to DOM elements based on the naming convention of Grid - a minimal CSS Grid Utility.
* by: www.joelpeterson.com  |  @joelasonian
* Based on Grid - a minimal CSS Grid utility - By Brajeshwar (http://brajeshwar.com/author/brajeshwar/)
* Plugin Boilerplate by Stefan Gabos (http://stefangabos.ro/jquery/jquery-plugin-boilerplate-oop/)
***/

/** 
* DEFAULT USAGE
$(document).ready(function() {
	$.cssGrid($('.grids'));
});
*
* USAGE WITH CUSTOM STRING SEGMENTS
$(document).ready(function() {
	$.cssGrid($('.grids'), {
		startString: 'g',
		seperatorString: 'of'
	});
});
* 
***/

;(function($) {
    $.cssGrid = function(el, options) {
        var defaults = {
            startString: 'g',
			seperatorString: 'of'
        }
        var plugin = this;
        plugin.settings = {}

        var init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
			el.css('overflow','hidden');
			var els = el.find('[class*="'+plugin.settings['startString']+'"]').filter(function(){
				var re = new RegExp( '.*'+plugin.settings['startString']+'[0-9]*'+plugin.settings['seperatorString']+'[0-9]*' );
				return $(this).attr('class').match( re );				
			});
			els.each(function(){
				var ree = new RegExp(plugin.settings['startString']+'[0-9]*'+plugin.settings['seperatorString']+'[0-9]*' );
				parsestring = $(this).attr('class').match( ree );
				var intsub = parsestring[0].substring(plugin.settings['startString'].length,parsestring[0].indexOf(plugin.settings['seperatorString']));
				var intfull = parsestring[0].substring(parsestring[0].indexOf(plugin.settings['seperatorString'])+plugin.settings['seperatorString'].length);	

				var strwidth = calculateWidth(intsub,intfull);
				$(this).css({'float' : 'left','width' : strwidth});
			})
        }

        var calculateWidth = function(intsub, intfull) {
			var w = Math.round((intsub / intfull) * 100000000)/ 1000000;
			return w + "%";
        }
        init();
    }
})(jQuery);