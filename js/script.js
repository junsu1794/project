$('.showcase').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('.slide').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
});
$('.slide .stop').on('click', function (e) {
	e.preventDefault();
	if (!$(this).hasClass('on')) {
		$('.slide').slick('slickPause');
		$(this).addClass('on');
	} else {
		$('.slide').slick('slickPlay');
		$(this).removeClass('on');
	}
});

$('.notice_banner').slick({
	autoplay: false,
	autoplaySpeed: 2000,
	draggable:false,
  prevArrow:$('.control_box span.prev'),
  nextArrow:$('.control_box span.next')
});

$('.notice_banner_wrap .stop').on('click', function (e) {
	e.preventDefault();
	if (!$(this).hasClass('on')) {
		$('.notice_banner').slick('slickPause');
		$(this).addClass('on');
	} else {
		$('.notice_banner').slick('slickPlay');
		$(this).removeClass('on');
	}
});