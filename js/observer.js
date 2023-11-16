// !Иконки выпадают сверх и пружинят, пока не остановятся
const observer = new IntersectionObserver(entries => {
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
observer.observe(document.querySelector('.social-box'));

const observer2 = new IntersectionObserver(entries => {
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
observer2.observe(document.querySelector('.social-box2'));

const observer3 = new IntersectionObserver(entries => {
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
observer3.observe(document.querySelector('.social-box3'));



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
