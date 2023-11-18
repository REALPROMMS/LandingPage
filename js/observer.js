// !Текст трясется у новой секции (ABOUT HOBBY PROJECT) +++
const observerTitle = new IntersectionObserver(items => {
	items.forEach(item => {
		const animText = item.target.querySelector('.animationTitle');
		// if (entry.isIntersecting) // true or false {
		// 	animText.classList.add('shakeAnim'); // добавялет новый класс
		// 	return; // если класс добавлен, продолжать уже не надо
		// }
		// перемещение завершено, теперь надо удалить класс
		// animText.classList.remove('shakeAnim');
		animText.classList.toggle('shakeAnim', item.isIntersecting); // написан блок в коментах
	});
});
const elements = ['.about-title', '.hobby-title', '.project-title'];
elements.forEach(element => observerTitle.observe(document.querySelector(element)));
// observerTitle.observe(document.querySelector('.about-title'));
// observerTitle.observe(document.querySelector('.hobby-title'));
// observerTitle.observe(document.querySelector('.project-title'));

// !----------------------------------

// !Кнопка появляется c Glitch эффектом в header +++
const observerBtn = new IntersectionObserver(items => {
	items.forEach(item => {
		const animText = item.target.querySelector('.header__button-animation');
		animText.classList.toggle('animationBtn', item.isIntersecting);
	});
});
observerBtn.observe(document.querySelector('.header__button'));

// !----------------------------------

// !Иконки выпадают сверх и пружинят, пока не остановятся +++
const observerIconsMail = new IntersectionObserver(items => {
	items.forEach(item => {
		const animIcon = item.target.querySelector('.social__box-icon');
		animIcon.classList.toggle('animationIcons-1', item.isIntersecting);
	});
});
observerIconsMail.observe(document.querySelector('.social__mail'));

const observerIconsGit = new IntersectionObserver(items => {
	items.forEach(item => {
		const animIcon = item.target.querySelector('.social__box-icon');
		animIcon.classList.toggle('animationIcons-2', item.isIntersecting);
	});
});
observerIconsGit.observe(document.querySelector('.social__git'));

const observerIconsTelegram = new IntersectionObserver(items => {
	items.forEach(item => {
		const animIcon = item.target.querySelector('.social__box-icon');
		animIcon.classList.toggle('animationIcons-3', item.isIntersecting);
	});
});
observerIconsTelegram.observe(document.querySelector('.social__telegram'));

// !----------------------------------

// !Cжимаются и разжимаются иконки в разные стороны +++
const observerBox = new IntersectionObserver(items => {
	items.forEach(item => {
		const animIcon = item.target.querySelector('.animBoxIcon');
		animIcon.classList.toggle('social__box-anim', item.isIntersecting)
	});
});
const elementsIcon = ['.animationJelloIcons', '.animationJelloIcons2', '.animationJelloIcons3'];
elementsIcon.forEach(elementsIcon => observerBox.observe(document.querySelector(elementsIcon)));

// !----------------------------------

// !Эффект выезжающих панелей skills HTML
const observerSkill = new IntersectionObserver(items => {
	items.forEach(item => {
		const observerExp = item.target.querySelector('.progress-line');
		observerExp.classList.toggle('animationPanel', item.isIntersecting);
	});
});
const elementsSkill = ['.skill__progress', '.skill__progress2', '.skill__progress3', '.skill__progress4', '.skill__progress5', '.skill__progress6'];
elementsSkill.forEach(elementsSkill => observerSkill.observe(document.querySelector(elementsSkill)));

// !------------- замена блока кода
// if (entry.isIntersecting) {
// 	animBox.classList.add('social-box-anim');
// 	return; // если класс добавлен, продолжать уже не надо
// }
// // перемещение завершено, теперь надо удалить класс
// animBox.classList.remove('social-box-anim');
// !------------- одной строкой можно заменить код который выше в коментах
// animBox.classList.toggle('social-box-anim', entry.isIntersecting);