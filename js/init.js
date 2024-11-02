/* skel-baseline v2.0.3 | (c) n33 | getskel.com | MIT licensed */

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				containers: 943,
				grid: { gutters: ['2em', 23] }
			},
			medium: {
				media: '(max-width: 961px)',
				href: 'https://www.Advanced Excel for Data Analysis/css/style-medium.css',
				containers: 604,
			},
			small: {
				media: '(max-width: 620px)',
				href: 'https://www.Advanced Excel for Data Analysis/css/style-small.css',
				containers: '94%',
				grid: { gutters: ['2em', 23] }
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'animate',
					speed: 600
				},
				navPanel: {
					animation: 'pushX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-right',
					side: 'right',
					width: 200
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-right',
					side: 'top',
					width: 65
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

$('.buttonp').each(function() {

    if (window.innerWidth > 961) {

    // Extract text between "Completed!" and "<br />"
    var dynamicText = $(this).find('a:link, a:visited').contents().filter(function() {
        return this.nodeType === 3; // Node.TEXT_NODE
    }).text().trim();

    var baseFontSize = 1.6;
    var fontSizeChangeRate = 0.01;

    //console.log('dynamicText:', dynamicText);
    //console.log('dynamicText.length:', dynamicText.length);

    if (dynamicText.length < 56) {
        var dynamicFontSize = baseFontSize + (56 - dynamicText.length) * fontSizeChangeRate;
		
		// Limit dynamicFontSize to 1.68em
        dynamicFontSize = Math.min(dynamicFontSize, 1.68);
		
		if (dynamicFontSize > 1.64) {
			var paddingTopValue;
            paddingTopValue = '7px';		
		if (dynamicFontSize > 1.66) {
            paddingTopValue = '8px';
    	}
		
		if (dynamicFontSize === 1.68) {
            paddingTopValue = '9px';
    	}
		$(this).find('a:link, a:visited').css({ 'padding-top': paddingTopValue });
		//console.log('padding-top:', paddingTopValue);
		}
		
		//console.log('dynamicFontSize', dynamicFontSize);
        $(this).find('a:link, a:visited').css('fontSize', dynamicFontSize + 'em');
    }
	}
});

	});

})(jQuery);