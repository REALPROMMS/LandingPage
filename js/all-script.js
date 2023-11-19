// // !ДОБАВЛЯЕТ НОВЫЙ КЛАСС ЭЛЕМЕНТУ КОТОРОМУ НАДО
// let body = document.querySelector('body'),
// 	header = body.querySelector('.header'),
// 	power = body.querySelector('.night-btn');
// power.addEventListener('click', () => {
// 	header.classList.toggle('night-mode')
// });

// // !Скрипт для липкой навигации
// let headerSelector = document.getElementById("myHeader");
// let sticky = headerSelector.offsetTop;

// function myFunction() {
// 	if (window.pageYOffset >= sticky) {
// 		headerSelector.classList.add("sticky");
// 	} else {
// 		headerSelector.classList.remove("sticky");
// 	}
// }

// window.onscroll = function () { myFunction() };

// // !Скрипт для плавного скролла по якорям на странице
// // Найти все ссылки начинающиеся на #
// const anchors = document.querySelectorAll('a[href^="#"]')
// // Цикл по всем ссылкам
// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function (e) {
// 		e.preventDefault() // Предотвратить стандартное поведение ссылок
// 		// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
// 		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
// 		// Плавная прокрутка до элемента с id = href у ссылки
// 		document.querySelector(goto).scrollIntoView({
// 			behavior: "smooth",
// 			block: "start"
// 		})
// 	})
// }

// // !Настройки swiper
// const swiperProect = new Swiper(".swiperProject", {
// 	slidesPerView: 1,
// 	spaceBetween: 30,
// 	// effect: 'cube',
// 	loop: true,
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	// autoplay: {
// 	// 	delay: 1500,
// 	// }
// });

// // !Настройки AUDIO, две кнопки play and pause на сайте появляются
// function initAudioPlayer() {
// 	const audio = new Audio('audio/RG-Rose-Wasted.mp3');
// 	audio.loop = true;
// 	// Set object references
// 	const playbtn = document.getElementById('playpausebtn');
// 	// Add Event Handling
// 	playbtn.addEventListener('click', playPause);
// 	// Functions
// 	function playPause() {
// 		if (audio.paused) {
// 			audio.play();
// 			playbtn.style.background = 'url(/img/audio-icons/pause.png ) no-repeat';
// 		} else {
// 			audio.pause();
// 			playbtn.style.background = 'url(/img/audio-icons/play.png) no-repeat';
// 		}
// 	}
// }
// window.addEventListener('load', initAudioPlayer);

// // !Вешает анимацию на кнопку при клике и удаляет ее
// let animateButton = function (e) {

// 	e.preventDefault;
// 	//reset animation
// 	e.target.classList.remove('animate');

// 	e.target.classList.add('animate');
// 	setTimeout(function () {
// 		e.target.classList.remove('animate');
// 	}, 700);
// };
// let bubblyButtons = document.getElementsByClassName("bubbly-button2");

// for (let i = 0; i < bubblyButtons.length; i++) {
// 	bubblyButtons[i].addEventListener('click', animateButton, false);
// }

// // !Добавляет класс open при нажатии на кнопку roggle-btn
// const nav = document.querySelector('.menu__toggle'),
// 	toggleBtn = nav.querySelector('.toggle-btn');

// toggleBtn.addEventListener('click', () => {
// 	nav.classList.toggle('open')
// });

// // !Удаляет класс с анимацией на кнопке toggle menubar(при ее активации), а после закрытия меню снова добалвяет этот класс
// const animToggle = document.querySelector('.menu__toggle'),
// 	animTgBtn = animToggle.querySelector('.toggleMain');

// animTgBtn.addEventListener('click', () => {
// 	if (animTgBtn.querySelector('tgdBtn') === true) {
// 		animTgBtn.classList.remove('tgdBtn')
// 	} else {
// 		animTgBtn.classList.toggle('tgdBtn')
// 	}
// });

// // !Текст трясется у новой секции (ABOUT HOBBY PROJECT) Вешает и удаляет класс при появлении в поле зрения на сайте при скроле
// const observerTitle = new IntersectionObserver(items => {
// 	items.forEach(item => {
// 		const animText = item.target.querySelector('.animationTitle');
// 		// if (item.isIntersecting) { // true or false
// 		// 	animText.classList.add('shakeAnim'); // добавялет новый класс
// 		// 	return; // если класс добавлен, продолжать уже не надо
// 		// }
// 		// перемещение завершено, теперь надо удалить класс
// 		// animText.classList.remove('shakeAnim');
// 		animText.classList.toggle('shakeAnim', item.isIntersecting); // написан блок в коментах
// 	});
// });
// const elements = ['.about-title', '.hobby-title', '.project-title'];
// elements.forEach(element => observerTitle.observe(document.querySelector(element)));
// // observerTitle.observe(document.querySelector('.about-title'));

// // !Открывание и закрывание меню с эффектами разными(классы внизу добавлены)
// const icon = document.getElementById('toggler');
// const nav = document.getElementById('navbar');
// // functions
// nav.style.display = 'none';
// const showNav = (e) => {
// 	e.target.parentElement.classList.toggle('change-backGround');
// 	e.target.classList.toggle('clicked');
// 	//setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth
// 	e.target.classList.contains('clicked') ? (nav.style.cssText = 'dispaly: flex;', setTimeout(() => nav.style.transform = 'translateY(0)', 300)) : (nav.style.transform = 'translateY(-100%)', setTimeout(() => nav.style.display = 'none', 700));
// }
// //events
// icon.addEventListener('click', showNav);