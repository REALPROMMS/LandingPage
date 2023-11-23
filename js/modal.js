const modalWindow = document.querySelector('.modal');
const reserved = document.querySelector('.reserved');
const buttonClose = document.querySelector('.btn-close')



reserved.addEventListener('click', () => {

	modalWindow.classList.remove('none');
	modalWindow.classList.remove('animation-modal-window');

	buttonClose.addEventListener('click', () => {
		modalWindow.classList.add('animation-modal-window');
		setTimeout(function () {
			modalWindow.classList.add('none')
		}, 700);
	})
	modalWindow.addEventListener('click', () => {
		modalWindow.classList.add('animation-modal-window');
		setTimeout(function () {
			modalWindow.classList.add('none')
		}, 700);
	});
})
