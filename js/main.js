AOS.init({
	duration: 1200,
});

$(".nav-dropdown a").click(function() {
	// e.preventDefault();

	var position = $(this).attr("href");

	console.log($(position).offset().top);
	
	$("html, body").animate({
		scrollTop: $(position).offset().top
	} );

	return false;
});

$('a.logo--partner').on('click', function() {
	var description = $(this).data('desc');
	var name = $(this).data('name');
	var img = $(this).find('img').attr('src');

	var desc = $('<p>' + description + '</p>');
	var pName = $('<h2>' + name + '</h2>');

	$('.partner-info-head h2').text(name);
	$('#partner-desc p').text(description);
	$('#partner-logo').attr('src', img);

});


$(document).ready(function() {
	$('nav li > a:not(:only-child)').click(function(e) {
		$(this).siblings('.nav-dropdown').toggle();
		$('.nav-dropdown').not($(this).siblings()).hide();
		e.stopPropagation();
	});

	$('html').click(function() {
		$('.nav-dropdown').hide();
	});

})
