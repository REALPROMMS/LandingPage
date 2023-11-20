// !ДОБАВЛЯЕТ НОВЫЙ КЛАСС И УДАЛЯЕМ ДИСПЛЕЙ NONE

let full = document.querySelector('.full__screen');
let screenBtn = document.querySelector('.full__screen-btn');
let wrapper = document.querySelector('.wrapper');

const add = screenBtn.addEventListener('click', () => {
	wrapper.classList.remove('none')
	full.classList.add('none')
});
