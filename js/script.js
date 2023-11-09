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


// circle
function animationChart() {
	progressWrap.each(function () {
		const item = $(this);
		const title = item.find('span');
		const targetNum = title.attr('counter');
		const circle = item.find('circle');
		$({ rate: 0 }).animate(
			{ rate: targetNum },
			{
				duration: 1500,
				progress: function () {
					let now = this.rate;
					let amount = 630 - (630 * now) / 100;
					title.text(Math.floor(now));
					circle.css({strokeDashoffset:amount})
				},
			}
		)
	});
}