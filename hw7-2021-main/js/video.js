let video = document.querySelector(".video")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("In play")
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("In pause")
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("In faster")
	console.log("Current speed is ", video.playbackRate)
	video.playbackRate = video.playbackRate / 0.9
	console.log("New speed is ", video.playbackRate)
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("In slower")
	console.log("Current speed is ", video.playbackRate)
	video.playbackRate = video.playbackRate * 0.9
	console.log("New speed is ", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("In skip")
	console.log("Current location is ", video.currentTime)
	video.currentTime += 10
		if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("New location is ", video.currentTime)
});


document.querySelector("#mute").addEventListener("click", function(){
    console.log("Mute button clicked");

    if (video.muted === false) {
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
        console.log("Video is now muted");
    } 
    else {
        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
        console.log("Video is now unmuted");
    }
});

document.querySelector("#slider").addEventListener("input", function(){
    console.log("Volume slider moved");

    let newVolume = this.value / 100;
    video.volume = newVolume;
    document.querySelector("#volume-info").innerHTML = (newVolume * 100) + "%";
    console.log("New volume is:", newVolume);
});

document.querySelector("#vintage").addEventListener("click", function(){
    console.log("Old School button clicked");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
    console.log("Original button clicked");
    video.classList.remove("oldSchool");
});


