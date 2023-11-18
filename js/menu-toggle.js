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
