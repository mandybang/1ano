function toggleAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}