// !Текст трясется у новой секции (ABOUT HOBBY PROJECT) +++
const observerTitle = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animText = entry.target.querySelector('.animationTitle');
		// if (entry.isIntersecting) // true or false {
		// 	animText.classList.add('shakeAnim'); // добавялет новый класс
		// 	return; // если класс добавлен, продолжать уже не надо
		// }
		// перемещение завершено, теперь надо удалить класс
		// animText.classList.remove('shakeAnim');
		animText.classList.toggle('shakeAnim', entry.isIntersecting); // написан блок в коментах
	});
});
const elements = ['.about-title', '.hobby-title', '.project-title'];
elements.forEach(element => observerTitle.observe(document.querySelector(element)));
// observerTitle.observe(document.querySelector('.about-title'));
// observerTitle.observe(document.querySelector('.hobby-title'));
// observerTitle.observe(document.querySelector('.project-title'));

// !----------------------------------

// !Эффект падающей кнопки в header +++
const observerBtn = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animText = entry.target.querySelector('.header__button-animation');
		animText.classList.toggle('animationBtn', entry.isIntersecting);
	});
});
observerBtn.observe(document.querySelector('.header__button'));

// !----------------------------------

// !Иконки выпадают сверх и пружинят, пока не остановятся +++
// const observerIcons = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const animText = entry.target.querySelector('.social');
// 		// if (entry.isIntersecting) {
// 		// 	animText.classList.add('animationIcons');
// 		// 	return; // если класс добавлен, продолжать уже не надо
// 		// }
// 		// перемещение завершено, теперь надо удалить класс
// 		// animText.classList.remove('animationIcons');
// 		animText.classList.toggle('animationIcons', entry.isIntersecting);
// 	});

// });
// const elementsIcons = ['.social-box', '.social-box2', '.social-box3'];
// elementsIcons.forEach(element => observerIcons.observe(document.querySelector(element)));
// !---
// if (entry.isIntersecting) {
// 	animBox.classList.add('social-box-anim');
// 	return; // если класс добавлен, продолжать уже не надо
// }
// // перемещение завершено, теперь надо удалить класс
// animBox.classList.remove('social-box-anim');
// !---
// animBox.classList.toggle('social-box-anim', entry.isIntersecting);

// !----------------------------------

// !Иконки выпадают сверх и пружинят, пока не остановятся
const observerIcons = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animIcon = entry.target.querySelector('.social__box-icon');
		animIcon.classList.toggle('animationIcons-1', entry.isIntersecting);
	});
});
observerIcons.observe(document.querySelector('.social__box'));

const observerIcons2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animIcon = entry.target.querySelector('.social__box-icon');
		animIcon.classList.toggle('animationIcons-2', entry.isIntersecting);
	});
});
observerIcons2.observe(document.querySelector('.social__box2'));

const observerIcons3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animIcon = entry.target.querySelector('.social__box-icon');
		animIcon.classList.toggle('animationIcons-3', entry.isIntersecting);
	});
});
observerIcons3.observe(document.querySelector('.social__box3'));

// !----------------------------------

// !Прокруичвание в разные стороны иконок
const observerBox = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animBox = entry.target.querySelector('.animBox');
		animBox.classList.toggle('social__box-anim', entry.isIntersecting)
	});
});

// observerBox.observe(document.querySelector('.contact__box'));

const elementsIcon = ['.animationRotateIcons', '.animationRotateIcons2', '.animationRotateIcons3'];
elementsIcon.forEach(elementsIcon => observerBox.observe(document.querySelector(elementsIcon)));

// const observerBox2 = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const animBox = entry.target.querySelector('.animBox2');
// 		animBox.classList.toggle('social__box-anim', entry.isIntersecting)
// 	});
// });
// observerBox2.observe(document.querySelector('.contact__box'));


// const observerBox3 = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const animBox = entry.target.querySelector('.animBox3');
// 		animBox.classList.toggle('social__box-anim', entry.isIntersecting)
// 	});
// });
// observerBox3.observe(document.querySelector('.contact__box'));




// !Заголовок появляется c Glitch эффектом в header +++
const observerHeaderText = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const observerHeader = entry.target.querySelector('.observer-title-header');
		if (entry.isIntersecting) {
			observerHeader.classList.add('animationGlitchTitle');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		observerHeader.classList.remove('animationGlitchTitle');
	});
});
observerHeaderText.observe(document.querySelector('.header__info'));


// !Эффект выезжающих панелей skills HTML

const observerSkill = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const animText = entry.target.querySelector('.progress-line');
		if (entry.isIntersecting) {
			animText.classList.add('animationPanel');
			return; // если класс добавлен, продолжать уже не надо
		}
		// перемещение завершено, теперь надо удалить класс
		animText.classList.remove('animationPanel');
	});
});
const elementsSkill = ['.html', '.css', '.JavaScript', '.react', '.bootstrap', '.wordpress'];
elementsSkill.forEach(element => observerSkill.observe(document.querySelector(element)));



// const observerHtml = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const observerExp = entry.target.querySelector('.html');
// 		if (entry.isIntersecting) {
// 			observerExp.classList.add('animationPanel');
// 			return; // если класс добавлен, продолжать уже не надо
// 		}
// 		// перемещение завершено, теперь надо удалить класс
// 		observerExp.classList.remove('animationPanel');
// 	});
// });
// observerHtml.observe(document.querySelector('.panels'));

// // !CSS
// const observerCss = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const observerExp = entry.target.querySelector('.css');
// 		if (entry.isIntersecting) {
// 			observerExp.classList.add('animationPanel');
// 			return; // если класс добавлен, продолжать уже не надо
// 		}
// 		// перемещение завершено, теперь надо удалить класс
// 		observerExp.classList.remove('animationPanel');
// 	});
// });
// observerCss.observe(document.querySelector('.panels'));

// // !JS
// const observerJs = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const observerExp = entry.target.querySelector('.JavaScript');
// 		if (entry.isIntersecting) {
// 			observerExp.classList.add('animationPanel');
// 			return; // если класс добавлен, продолжать уже не надо
// 		}
// 		// перемещение завершено, теперь надо удалить класс
// 		observerExp.classList.remove('animationPanel');
// 	});
// });
// observerJs.observe(document.querySelector('.panels'));

// // !REACT
// const observerReact = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const observerExp = entry.target.querySelector('.react');
// 		if (entry.isIntersecting) {
// 			observerExp.classList.add('animationPanel');
// 			return; // если класс добавлен, продолжать уже не надо
// 		}
// 		// перемещение завершено, теперь надо удалить класс
// 		observerExp.classList.remove('animationPanel');
// 	});
// });
// observerReact.observe(document.querySelector('.panels'));

// // !BS
// const observerBs = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const observerExp = entry.target.querySelector('.bootstrap');
// 		if (entry.isIntersecting) {
// 			observerExp.classList.add('animationPanel');
// 			return; // если класс добавлен, продолжать уже не надо
// 		}
// 		// перемещение завершено, теперь надо удалить класс
// 		observerExp.classList.remove('animationPanel');
// 	});
// });
// observerBs.observe(document.querySelector('.panels'));

// // !WP
// const observerWp = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		const observerExp = entry.target.querySelector('.wordpress');
// 		if (entry.isIntersecting) {
// 			observerExp.classList.add('animationPanel');
// 			return; // если класс добавлен, продолжать уже не надо
// 		}
// 		// перемещение завершено, теперь надо удалить класс
// 		observerExp.classList.remove('animationPanel');
// 	});
// });
// observerWp.observe(document.querySelector('.panels'));



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