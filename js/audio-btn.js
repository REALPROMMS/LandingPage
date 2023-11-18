function initAudioPlayer() {
	const audio = new Audio('audio/RG-Rose-Wasted.mp3');
	audio.loop = true;
	// Set object references
	const playbtn = document.getElementById('playpausebtn');
	// Add Event Handling
	playbtn.addEventListener('click', playPause);
	// Functions
	function playPause() {
		if (audio.paused) {
			audio.play();
			playbtn.style.background = 'url(/img/audio-icons/pause.png ) no-repeat';
		} else {
			audio.pause();
			playbtn.style.background = 'url(/img/audio-icons/play.png) no-repeat';
		}
	}
}

window.addEventListener('load', initAudioPlayer);

