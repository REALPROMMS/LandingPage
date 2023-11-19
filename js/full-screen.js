// !ДОБАВЛЯЕТ НОВЫЙ КЛАСС И УДАЛЯЕМ ДИСПЛЕЙ NONE
let screen = document.querySelector('.full__screen'),
	// кнопка
	full__screen = screen.querySelector('.full__screen-btn'),

	all = document.querySelector('body'),
	// главный селектор сайта
	selectorAll = all.querySelector('.full-site');

full__screen.addEventListener('click', () => {
	if (selectorAll.classList.toggle('displayNoneAll') === true) {
		selectorAll.classList.toggle('displayBlockAll') && selectorAll.classList.romove('displayNoneAll')
	}
});

// !---


const observerScreen = new IntersectionObserver(items => {
	items.forEach(item => {

		const animSite = item.target.querySelector('.full-site');
		if (item.isIntersecting) {
			animSite.classList.add('displayNoneAll');
		} else {
			animSite.classList.remove('displayBlockAll');
		}
		let screen = document.querySelector('.full__screen');
		let full__screen = screen.querySelector('.full__screen-btn');
		full__screen.addEventListener('click', () => {
			screen.classList.add('displayNoneAll')
			return
		});
	});
});
observerScreen.observe(document.querySelector('body'));



// const observerScreen = new IntersectionObserver(items => {
// 	items.forEach(item => {

// 		const animText = item.target.querySelector('.all');
// 		if (item.isIntersecting) {
// 			animText.classList.add('displayNoneAll');
// 		} else {
// 			animText.classList.remove('displayBlockAll');
// 		}
// 		let screen = document.querySelector('.full__screen');
// 		let full__screen = screen.querySelector('.full__screen-btn');
// 		full__screen.addEventListener('click', () => {
// 			screen.classList.add('displayNoneAll')
// 			return
// 		});
// 	});
// });
// observerScreen.observe(document.querySelector('body'));