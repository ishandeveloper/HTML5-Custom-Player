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


const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');

// formatTime takes a time length in seconds and returns the time in minutes and seconds
function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
        minutes: result.substr(3, 2),
        seconds: result.substr(6, 2),
    };
};

// initializeVideo sets the video duration, and maximum value of progress bar
function initializeVideo() {
  const videoDuration = Math.round(video.duration);
  seek.setAttribute('max', videoDuration);
  progressBar.setAttribute('max', videoDuration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}
video.addEventListener('loadedmetadata', initializeVideo);


//Changes the elapsed duration text after video time has been updated, i.e. after each second.
function updateTimeElapsed() {
    const time = formatTime(Math.round(video.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

video.addEventListener('timeupdate', updateTimeElapsed);


//Update Progress Bar
const progressBar = document.getElementById('progress-bar');
const seek = document.getElementById('seek');

function updateProgress() {
    seek.value = Math.floor(video.currentTime);
    progressBar.value = Math.floor(video.currentTime);
  }
video.addEventListener('timeupdate', updateProgress);