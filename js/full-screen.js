// !ДОБАВЛЯЕТ НОВЫЙ КЛАСС И УДАЛЯЕМ ДИСПЛЕЙ NONE

const fullScreen = document.querySelector('.full-screen');
const screenButton = document.querySelector('.full-screen__button');
const wrapper = document.querySelector('.wrapper');

const add = screenButton.addEventListener('click', () => {
	wrapper.classList.remove('none')
	fullScreen.classList.add('none')
});
