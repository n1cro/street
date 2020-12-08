$(document).ready(function () {
	$('.buttons a').click(function () {
		$('.buttons a').removeClass('a__active')
		$(this).addClass('a__active')
	})
	$('.burger_mob').click(function () {
		$('.menu__dropdown').slideToggle()
	})
	$('.menu__ul').click(function () {
		$('.menu__dropdown').slideToggle()
	})
})