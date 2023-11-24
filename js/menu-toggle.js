// !Добавляет класс open при нажатии на кнопку roggle-btn
const toggleMenu = document.querySelector('.toggle__menu'),
	toggleButton = toggleMenu.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
	toggleMenu.classList.toggle('open')
});

// !Удаляет класс с анимацией на кнопке toggle menubar(при ее активации), а после закрытия меню снова добалвяет этот класс
const animationToggle = document.querySelector('.toggle__menu'),
	animationPulseButton = animationToggle.querySelector('.toggle-img');

animationPulseButton.addEventListener('click', () => {
	if (animationPulseButton.querySelector('button-click') === true) {
		animationPulseButton.classList.remove('button-click')
	} else {
		animationPulseButton.classList.toggle('button-click')
	}
});
