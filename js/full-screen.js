// !ДОБАВЛЯЕТ НОВЫЙ КЛАСС И УДАЛЯЕМ ДИСПЛЕЙ NONE

let screenBox = document.querySelector('.full__screen');
let full__screen = document.querySelector('.full__screen-btn');
let selectorAll = document.querySelector('.full-site');

const add = full__screen.addEventListener('click', () => {
	selectorAll.classList.remove('none')
	screenBox.classList.add('none')
});
