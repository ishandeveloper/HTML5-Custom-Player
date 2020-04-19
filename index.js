const video = document.querySelector('#video');
const videoControls = document.querySelector('#video-controls');


// Checking Video Format Support
const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
    video.controls = false;
    videoControls.classList.remove('hidden');
}


//Play
const play = document.querySelector('#play');
play.addEventListener('click', togglePlay);

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}
//Changing Play Icon To Pause Icon
const playpauseIcon = document.querySelectorAll('.playback-icons use');

video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

function updatePlayButton() {
    playpauseIcon.forEach(icon => icon.classList.toggle('hidden'));
  
    if (video.paused) {
      play.setAttribute('data-title', 'Play (k)')
    } else {
      play.setAttribute('data-title', 'Pause (k)')
    }

  }


