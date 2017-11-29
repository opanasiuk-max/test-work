$(document).ready(function() {
	// Scroll

	$('.nav__item-link').click( function(e){
    	e.preventDefault();
	    var id = $(this).attr('href');
		var top = $(id).offset().top;
	    $('body,html').animate({ scrollTop: top }, 1500);
    });


	//Tabs

	$('.filter-button-link').click( function(e){
		e.preventDefault();
		let target = e.target;
		let item = $(target).closest('.filter-button-item');
		let contentItem = $('.flex-item-img');

		let itemPosition = item.index();
		contentItem.eq(itemPosition)
			.addClass("show")
			.siblings()
			.removeClass("show");

		$(target).closest('.filter-button-item')
			.addClass("active")
			.siblings()
			.removeClass("active");
	});

});




console.log("max-fax");