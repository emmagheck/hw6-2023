// Page load: Initialize the video element and turn off autoplay and turn off looping.
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	// single equals sign means you are setting autoplay to false
	console.log("auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)

});

// Play Button: Play the video and update the volume information.
document.querySelector("#play").addEventListener("click", function() {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
	console.log("Play Video")
})



// Pause Button: Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	if (video.play) {
		video.pause();
	} else {
		video.play();
	}
	console.log("Pause Video");
})

//Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	if (!video.paused) {
		video.playbackRate -= 0.1;
	}
	console.log("Slow down video")
	console.log("Speed is " + video.playbackRate)
})

// Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	if (!video.paused) {
		video.playbackRate += 0.1;
	}
	console.log("Speed up video")
	console.log("Speed is " + video.playbackRate)
})
// Skip ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
})

// Mute/unmute the video and update the text in the button
var mute = document.getElementById("mute")
mute.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		mute.textContent = 'Mute';
	  } else {
		video.muted = true;
		mute.textContent = 'Unmute';
	  }
})

// Volume slider: Change the volume based on the slider and update the volume information.
var slider = document.getElementById("slider")
var volumeDisplay = document.getElementById("volume")
var maxVolume = document.getElementById("max")
slider.addEventListener("input", function () {
	video.volume = slider.value / 100;
	volumeDisplay.textContent = slider.value + "%";
	if (maxVolume) {
		maxVolume.value == true
		volumeDisplay.textContent = "100%"
	}
})

// Styled: Utilize the existing oldSchool class on the video element
var oldSchool = document.getElementById("vintage")
oldSchool.addEventListener("click", function() {
	video.classList.toggle('oldSchool');

})

// Original: Remove the oldSchool class from the video
var original = document.getElementById("orig")
original.addEventListener("click", function() {
	video.classList.add('orig');
	video.classList.remove("oldSchool");
})
