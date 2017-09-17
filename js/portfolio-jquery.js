$(document).ready(function() {
	$('ul#gallery').on('click', 'button', function(event) {
		event.preventDefault();
		console.log($(this).closest('li').children().closest('div.toggle'));
		$.fn.extend({
		    toggleText: function(a, b){
		        return this.text(this.text() == b ? a : b);
		    }
		});
		$(this).closest('li').children().closest('button').toggleText('Show More', 'Show Less');
		$(this).closest('li').children().closest('div.toggle').toggleClass('hidden');
	});
});