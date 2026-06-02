// loader

$(window).on("DOMContentLoaded",function(){
	$("#loadingscreen").fadeOut("slow");
});

// Popup and closing
const popupLink = document.querySelectorAll(".item-link");

if (popupLink != null) {
	popupLink.forEach(element => {
		let showLink = element.querySelector(".show-icon");
		let visBox = element.querySelector("#toggleDisplay");
		let closeIcon = element.querySelector(".close-icon");
		let video = element.querySelector("#vidStop");

		showLink.addEventListener("click", function () {
			visBox.setAttribute("class", "show");
		});

		closeIcon.addEventListener("click", function () {
			visBox.setAttribute("class", "hide");
			video.pause();
		});
	});
};

/* video intro elements */
var ngoymalayinDiv = document.querySelector('#ngoymalayin')
var ngoymalayinVideo = document.querySelector('#ngoymalayin .video-player video');
var ngoymalayinClose = document.querySelector('#ngoymalayin .hidebutton');
var allVideo = document.querySelector('video')

/* Hook up the event listeners */
// Click events
ngoymalayinClose.addEventListener("click", function hide() {
	ngoymalayinDiv.setAttribute("class", "hide");
	ngoymalayinVideo.pause();
	allVideo.pause();
});
// // hide first video on click 

// function hide() {
//     var myClasses = document.querySelectorAll('.video-intro'),
//         i = 0,
//         l = myClasses.length;

//     for (i; i < l; i++) {
//         myClasses[i].style.display = 'none';
//     }
// }

// audio hover event

var test = document.getElementById("audio1");
test.addEventListener("mouseover", function (event) {
	var audio = document.getElementById("sound1");
	audio.play();
}, false);
var test = document.getElementById("audio2");
test.addEventListener("mouseover", function (event) {
	var audio = document.getElementById("sound2");
	audio.play();
}, false);
var test = document.getElementById("audio3");
test.addEventListener("mouseover", function (event) {
	var audio = document.getElementById("sound3");
	audio.play();
}, false);
var test = document.getElementById("audio4");
test.addEventListener("mouseover", function (event) {
	var audio = document.getElementById("sound4");
	audio.play();
}, false);

