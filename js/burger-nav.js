// const icon = document.getElementById('toggler');
// const navigation = document.getElementById('navbar');
// // functions
// navigation.style.display = 'none';
// const showNav = (e) => {
// 	e.target.parentElement.classList.toggle('change-backGround');
// 	e.target.classList.toggle('clicked');
// 	//setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth
// 	e.target.classList.contains('clicked') ? (navigation.style.cssText = 'dispaly: flex;', setTimeout(() => navigation.style.transform = 'translateY(0)', 300)) : (navigation.style.transform = 'translateY(-100%)', setTimeout(() => navigation.style.display = 'none', 700));
// }
// //events
// icon.addEventListener('click', showNav);




// !ДОБАВЛЯЕТ НОВЫЙ КЛАСС И УДАЛЯЕМ ДИСПЛЕЙ NONE
let screen = document.querySelector('.full__screen'),
	// кнопка
	full__screen = screen.querySelector('.full__screen-btn'),

	all = document.querySelector('body'),
	// главный селектор сайта
	selectorAll = all.querySelector('.all');

full__screen.addEventListener('click', () => {
	if (selectorAll.classList.toggle('displayNoneAll') === true) {
		selectorAll.classList.toggle('displayBlockAll') && selectorAll.classList.romove('displayNoneAll')
	}
});

// !---


const observerScreen = new IntersectionObserver(items => {
	items.forEach(item => {

		const animText = item.target.querySelector('.all');
		if (item.isIntersecting) {
			animText.classList.add('displayNoneAll');
		} else {
			animText.classList.remove('displayBlockAll');
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




