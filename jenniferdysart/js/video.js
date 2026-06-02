/* Get our elements */
var brimmingVideo = document.querySelector(
	'#brimming .video-player.desktop video'
);
var brimmingFullscreen = document.querySelector(
	'#brimming .video-player.desktop #desktopbutton'
);
var brimmingIcon = document.querySelector(
	'#brimming .video-player.desktop #desktopbutton img'
);

/* Build out functions */
// toggle play/pause
function brimmingtogglePlay() {
	var method = brimmingVideo.paused ? 'play' : 'pause';
	brimmingVideo[method]();
}

// Create fullscreen video button
function brimmingtoggleFullscreen() {
	if (brimmingVideo.requestFullScreen) {
		brimmingVideo.requestFullScreen();
		brimmingtogglePlay();
	} else if (brimmingVideo.webkitRequestFullScreen) {
		brimmingVideo.webkitRequestFullScreen();
		brimmingtogglePlay();
	} else if (brimmingVideo.mozRequestFullScreen) {
		brimmingVideo.mozRequestFullScreen();
		brimmingtogglePlay();
	}
	brimmingVideo.controls = true;
	brimmingVideo.muted = false;
	brimmingIcon.className = 'hide';
}

// what happens when you exit fullscreen
function brimmingexitHandler() {
	if (document.webkitIsFullScreen === false) {
		brimmingtogglePlay();
		brimmingVideo.muted = true;
		brimmingVideo.controls = false;
	} else if (document.mozFullScreen === false) {
		brimmingtogglePlay();
		brimmingVideo.muted = true;
		brimmingVideo.controls = false;
	} else if (document.msFullscreenElement === false) {
		brimmingtogglePlay();
		brimmingVideo.muted = true;
		brimmingVideo.controls = false;
	}
}

/* Hook up the event listeners */
// Click events
brimmingFullscreen.addEventListener('click', brimmingtoggleFullscreen);

// // Exit fullscreen event from https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
// brimmingVideo.addEventListener('fullscreenchange', brimmingexitHandler, false);
// brimmingVideo.addEventListener('mozfullscreenchange', brimmingexitHandler, false);
// brimmingVideo.addEventListener('MSFullscreenChange', brimmingexitHandler, false);
// brimmingVideo.addEventListener('webkitfullscreenchange', brimmingexitHandler, false);
