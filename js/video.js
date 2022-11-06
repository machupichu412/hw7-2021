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
	vol = document.getElementById("volume");
	video = document.getElementById("player1");
	slider = document.getElementById("slider");
	video.defaultPlaybackRate = 1.0;
    video.play();
	vol.innerHTML = slider.value + '%';
	video.volume = slider.value * 0.01;
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
	video = document.getElementById("player1");
	vol = document.getElementById("volume");
	slider = document.getElementById("slider");
	video.volume = 0;
	vol.innerHTML = '0%';
	slider.value = 0;
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Change Volume");
	video = document.getElementById("player1");
	vol = document.getElementById("volume");
	slider = document.getElementById("slider");
	video.volume = slider.value * 0.01;
	vol.innerHTML = slider.value + '%';
	console.log("Current volume is: " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Style");
	video = document.getElementById("player1");
	video.className = "oldSchool"
	console.log("Current video style is: " + video.className);
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Style");
	video = document.getElementById("player1");
	video.className = "video"
	console.log("Current video style is: " + video.className);
});