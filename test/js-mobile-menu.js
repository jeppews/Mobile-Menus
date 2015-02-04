function jsmm(args) {
	position = $(args.content).css('position');
	width = $(args.content).css('width');

	$(window).on('scroll', function() {
		scrollTop = $(window).scrollTop();
		scrollLeft = $(window).scrollLeft();
	});

	$('#toggle').on('click', function() {
		if ( ! $('body').hasClass('js-menu-open') ) {
			$(args.content).attr('scroll-position', scrollTop);

			$(args.content).css({
				position: 'fixed',
				top: -scrollTop,
				width: width
			}).animate({
				left: '90%'
			}, args.speed);
		} else {
			$(args.content).animate({
				left: 0
			}, args.speed, function() {
				$(args.content).css('position', position);
				scrollTop = parseInt($(args.content).attr('scroll-position'));
				$(window).scrollTop(scrollTop);
			});
		}

		$('body').toggleClass('js-menu-open');
	});
}