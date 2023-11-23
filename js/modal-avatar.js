const infoAvatar = document.querySelector('.modal-info-avatar');
const cross = document.querySelector('.cross');

infoAvatar.addEventListener('click', () => {
	infoAvatar.classList.add('expand');
	cross.addEventListener('click', () => {
		infoAvatar.classList.remove('expand');
		event.stopPropagation();
	})
})

