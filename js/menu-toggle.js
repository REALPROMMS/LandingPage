// !Добавляет класс open при нажатии на кнопку roggle-btn
const nav = document.querySelector('.menu__toggle'),
	toggleBtn = nav.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
	nav.classList.toggle('open')
});


// !Удаляет класс с анимацией на кнопке toggle menubar(при ее активации), а после закрытия меню снова добалвяет этот класс
const animToggle = document.querySelector('.menu__toggle'),
	animTgBtn = animToggle.querySelector('.toggleMain');

animTgBtn.addEventListener('click', () => {
	if (animTgBtn.querySelector('tgdBtn') === true) {
		animTgBtn.classList.remove('tgdBtn')
	} else {
		animTgBtn.classList.toggle('tgdBtn')
	}
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