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

	var desc = $('<p>' + description + '</p>');
	var pName = $('h2' + name + '</h2>');


	// var src = $(this).children('img').src;

	$(this).closest('.partner-info-head h2').text().remove();
	$(this).closest('.desc p').text().remove(); 

	console.log(description, name);
});

function showContent() {

}

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
