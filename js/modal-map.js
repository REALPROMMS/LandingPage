const modalWindowMap = document.querySelector('.modal-map__box');
const map = document.querySelector('.map-btn');

map.addEventListener('click', () => {

	modalWindowMap.classList.remove('none');
	modalWindowMap.classList.remove('animation-modal-window2');

	modalWindowMap.addEventListener('click', () => {
		modalWindowMap.classList.add('animation-modal-window2');
		setTimeout(function () {
			modalWindowMap.classList.add('none')
		}, 500);
	});
})
