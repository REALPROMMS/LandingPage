// !HEADER NIGHT
let body = document.querySelector('body'),
	header = body.querySelector('.header'),
	power = body.querySelector('.night-btn');
power.addEventListener('click', () => {
	header.classList.toggle('night-mode')
});



// !MAIN NIGHT
body = document.querySelector('body'),
	main = body.querySelector('.main'),
	power = body.querySelector('.night-btn');
power.addEventListener('click', () => {
	main.classList.toggle('night-mode')
});



// !FOOTER NIGHT
body = document.querySelector('body'),
	footer = body.querySelector('.bg-footer'),
	power = body.querySelector('.night-btn');
power.addEventListener('click', () => {
	footer.classList.toggle('night-mode')
});


// !HEADER NIGHT TOGGLE
body = document.querySelector('body'),
	header = body.querySelector('.header'),
	power = body.querySelector('.night-btn-toggle');
power.addEventListener('click', () => {
	header.classList.toggle('night-mode')
});



// !MAIN NIGHT TOGGLE
body = document.querySelector('body'),
	main = body.querySelector('.main'),
	power = body.querySelector('.night-btn-toggle');
power.addEventListener('click', () => {
	main.classList.toggle('night-mode')
});



// !FOOTER NIGHT TOGGLE
body = document.querySelector('body'),
	footer = body.querySelector('.bg-footer'),
	power = body.querySelector('.night-btn-toggle');
power.addEventListener('click', () => {
	footer.classList.toggle('night-mode')
});








// const array = ['.header', '.bg-footer']

// function myArray(inputArray) {
// 	inputArray.forEach(el => {
// 		if (el === '.header' || el === '.bg-footer') {
// 			const night = document.querySelector(el),
// 				powerBtn = night.querySelector('.night-btn');
// 			return powerBtn.addEventListener('click', () => {
// 				night.classList.toggle('night-mode')

// 			});
// 		}
// 	})
// }

// myArray(array)