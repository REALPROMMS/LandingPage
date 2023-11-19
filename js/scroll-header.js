// !Скрипт для плавного скролла по якорям на странице

// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault() // Предотвратить стандартное поведение ссылок
		// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
		// Плавная прокрутка до элемента с id = href у ссылки
		document.querySelector(goto).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}




// !Скрипт для липкой навигации
// window.onscroll = function () { myFunction() };


// let header = document.getElementById("myHeader");

// let sticky = header.offsetTop;

// function myFunction() {
// 	if (window.pageYOffset >= sticky) {
// 		header.classList.add("sticky");
// 	} else {
// 		header.classList.remove("sticky");
// 	}
// }




