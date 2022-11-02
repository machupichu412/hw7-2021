var video = document.getElementById("player1");
var vol = document.getElementById("volume");
var slider = document.getElementById("slider");
const maxVolume = 100;
const minVolume = 0;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.getElementById("player1");
	video.defaultPlaybackRate = 1.0;
    video.play();
	slider.value = maxVolume;
	vol.innerHTML = maxVolume;
	video.volume = maxVolume * 0.01;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.getElementById("player1");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video = document.getElementById("player1");
    video.playbackRate = video.playbackRate * 0.9;
	console.log("Playback Rate is: " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video = document.getElementById("player1");
    video.playbackRate = video.playbackRate / 0.9;
	console.log("Playback Rate is: " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead 10 Seconds");
	video = document.getElementById("player1");
    video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current time is: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.volume = minVolume * 0.01;
	vol.innerHTML = minVolume;
	slider.value = minVolume;
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Change Volume");
	video.volume = slider.value * 0.01;
	vol.innerHTML = slider.value;
	console.log("Current volume is: " + video.volume);
});
