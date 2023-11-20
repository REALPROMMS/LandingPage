// !ДОБАВЛЯЕТ НОВЫЕ КЛАССЫ КНОПКЕ BURGER ПЛЮС ФОН И ПРОЧИЕ СВОЙСТВА С ЭФФЕКТАМИ

const icon = document.getElementById('toggler');
const navigation = document.getElementById('navbar');
// functions
navigation.style.display = 'none';
const showNav = (e) => {
	e.target.parentElement.classList.toggle('change-backGround');
	e.target.classList.toggle('clicked');
	//setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth
	e.target.classList.contains('clicked') ? (navigation.style.cssText = 'dispaly: flex;', setTimeout(() => navigation.style.transform = 'translateY(0)', 300)) : (navigation.style.transform = 'translateY(-100%)', setTimeout(() => navigation.style.display = 'none', 700));
}
//events
icon.addEventListener('click', showNav);


// !ДОБАВЛЯЕТ НОВЫЙ КЛАСС И УДАЛЯЕМ ДИСПЛЕЙ NONE

const menu = document.getElementById('main')
const burger = document.getElementById('menu')

burger.addEventListener('click', () => {
	menu.classList.toggle('index-menu')
});







