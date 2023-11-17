// !Иконки выпадают сверх и пружинят, пока не остановятся
const observerIcons = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const social = entry.target.querySelector('.social');
		if (entry.isIntersecting) {
			social.classList.add('anim-1');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		social.classList.remove('anim-1');
	});
});
observerIcons.observe(document.querySelector('.social-box'));

const observerIcons2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const social = entry.target.querySelector('.social');
		if (entry.isIntersecting) {
			social.classList.add('anim-2');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		social.classList.remove('anim-2');
	});
});
observerIcons2.observe(document.querySelector('.social-box2'));

const observerIcons3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const social = entry.target.querySelector('.social');
		if (entry.isIntersecting) {
			social.classList.add('anim-3');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		social.classList.remove('anim-3');
	});
});
observerIcons3.observe(document.querySelector('.social-box3'));



// !Прокруичвание в разные стороны иконок
const observerBox = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animBox = entry.target.querySelector('.animBox');
		if (entry.isIntersecting) {
			animBox.classList.add('social-box-anim');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		animBox.classList.remove('social-box-anim');
	});
});
observerBox.observe(document.querySelector('.contact__box'));

const observerBox2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animBox = entry.target.querySelector('.animBox2');
		if (entry.isIntersecting) {
			animBox.classList.add('social-box-anim');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		animBox.classList.remove('social-box-anim');
	});
});
observerBox2.observe(document.querySelector('.contact__box'));


const observerBox3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animBox = entry.target.querySelector('.animBox3');
		if (entry.isIntersecting) {
			animBox.classList.add('social-box-anim');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		animBox.classList.remove('social-box-anim');
	});
});
observerBox3.observe(document.querySelector('.contact__box'));



// !Текст трясется у новой секции
const observerAbout = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animText = entry.target.querySelector('.animText');
		if (entry.isIntersecting) {
			animText.classList.add('shakeAnim');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		animText.classList.remove('shakeAnim');
	});
});
observerAbout.observe(document.querySelector('.about-title'));

const observerHobby = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animText = entry.target.querySelector('.animText');
		if (entry.isIntersecting) {
			animText.classList.add('shakeAnim');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		animText.classList.remove('shakeAnim');
	});
});
observerHobby.observe(document.querySelector('.hobby-title'));

const observerProject = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animText = entry.target.querySelector('.animText');
		if (entry.isIntersecting) {
			animText.classList.add('shakeAnim');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		animText.classList.remove('shakeAnim');
	});
});
observerProject.observe(document.querySelector('.project-title'));



// !Текст появляется как глитч(матрица)
const observerHeaderText = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerHeader = entry.target.querySelector('.observerHeader');
		if (entry.isIntersecting) {
			observerHeader.classList.add('headerTextAnim');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerHeader.classList.remove('headerTextAnim');
	});
});
observerHeaderText.observe(document.querySelector('.header__info'));



// !Эффект падающей кнопки
const observerBtn = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerHeader = entry.target.querySelector('.btn-flip');
		if (entry.isIntersecting) {
			observerHeader.classList.add('animationBtn');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerHeader.classList.remove('animationBtn');
	});
});
observerBtn.observe(document.querySelector('.header__button'));



// !Эффект выезжающих панелей skills
const observerHtml = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerExp = entry.target.querySelector('.html');
		if (entry.isIntersecting) {
			observerExp.classList.add('animationPanel');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerExp.classList.remove('animationPanel');
	});
});
observerHtml.observe(document.querySelector('.panels'));

// !CSS
const observerCss = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerExp = entry.target.querySelector('.css');
		if (entry.isIntersecting) {
			observerExp.classList.add('animationPanel');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerExp.classList.remove('animationPanel');
	});
});
observerCss.observe(document.querySelector('.panels'));

// !JS
const observerJs = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerExp = entry.target.querySelector('.JavaScript');
		if (entry.isIntersecting) {
			observerExp.classList.add('animationPanel');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerExp.classList.remove('animationPanel');
	});
});
observerJs.observe(document.querySelector('.panels'));

// !REACT
const observerReact = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerExp = entry.target.querySelector('.react');
		if (entry.isIntersecting) {
			observerExp.classList.add('animationPanel');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerExp.classList.remove('animationPanel');
	});
});
observerReact.observe(document.querySelector('.panels'));

// !BS
const observerBs = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerExp = entry.target.querySelector('.bootstrap');
		if (entry.isIntersecting) {
			observerExp.classList.add('animationPanel');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerExp.classList.remove('animationPanel');
	});
});
observerBs.observe(document.querySelector('.panels'));

// !WP
const observerWp = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerExp = entry.target.querySelector('.wordpress');
		if (entry.isIntersecting) {
			observerExp.classList.add('animationPanel');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerExp.classList.remove('animationPanel');
	});
});
observerWp.observe(document.querySelector('.panels'));



// !ABOUT ICONS - вылетают иконки в разделе ABOUT
const observerIconsAbout = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerIcons = entry.target.querySelector('.imgAnim');
		if (entry.isIntersecting) {
			observerIcons.classList.add('animAboutimg');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerIcons.classList.remove('animAboutimg');
	});
});
observerIconsAbout.observe(document.querySelector('.info--bottom'));

// ! 2
const observerIconsAbout2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerIcons = entry.target.querySelector('.imgAnim2');
		if (entry.isIntersecting) {
			observerIcons.classList.add('animAboutimg2');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerIcons.classList.remove('animAboutimg2');
	});
});
observerIconsAbout2.observe(document.querySelector('.info--bottom'));

// ! 3
const observerIconsAbout3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerIcons = entry.target.querySelector('.imgAnim3');
		if (entry.isIntersecting) {
			observerIcons.classList.add('animAboutimg3');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerIcons.classList.remove('animAboutimg3');
	});
});
observerIconsAbout3.observe(document.querySelector('.info--bottom'));

// ! 4
const observerIconsAbout4 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerIcons = entry.target.querySelector('.imgAnim4');
		if (entry.isIntersecting) {
			observerIcons.classList.add('animAboutimg4');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerIcons.classList.remove('animAboutimg4');
	});
});
observerIconsAbout4.observe(document.querySelector('.info--bottom'));

// ! 5
const observerIconsAbout5 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerIcons = entry.target.querySelector('.imgAnim5');
		if (entry.isIntersecting) {
			observerIcons.classList.add('animAboutimg5');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerIcons.classList.remove('animAboutimg5');
	});
});
observerIconsAbout5.observe(document.querySelector('.info--bottom'));