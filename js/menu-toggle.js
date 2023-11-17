const nav = document.querySelector('.menu__toggle'),
	toggleBtn = nav.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
	nav.classList.toggle('open')
});



// // js-код для создания перетаскиваемой навигационной системы
// function onDrag(movementY) { // movementY возвращает значение по вертикали мыши
// 	const navStyle = window.getComputedStyle(nav), // получение всего css-стиля навигации
// 		navTop = parseInt(navStyle.top), // получение максимального значения nav
// 		navHeight = parseInt(navStyle.height), // без parseInt была typeof(string), а с typeof стало (number)
// 		windHeight = window.innerHeight; // получение максимального значения height

// 	nav.style.top = navTop > 0 ? `${navTop + movementY}px` : '1px';
// 	if (navTop > windHeight - navHeight) {
// 		nav.style.top = `${windHeight - navHeight}px`;
// 	}
// }


// nav.addEventListener('mousedown', () => {
// 	nav.addEventListener('mousemove', onDrag)
// });


// // эта функция будет вызываться, когда пользователь отпускает кнопку мыши и отпускает мышь
// nav.addEventListener('mouseup', () => {
// 	nav.removeEventListener('mousemove', onDrag)
// });

// nav.addEventListener('mouseleave', () => {
// 	nav.removeEventListener('mousemove', onDrag)
// });