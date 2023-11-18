const swiperProect = new Swiper(".swiperProject", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	// autoplay: {
	// 	delay: 1500,
	// }
});


const sliderHobby = new Swiper('.sliderHobby', {

	effect: 'cube',
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	autoplay: {
		delay: 2500,
	}
});
