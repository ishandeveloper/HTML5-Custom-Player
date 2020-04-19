const video = document.querySelector('#video');
const videoControls = document.querySelector('#video-controls');


// Checking Video Format Support
const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
    video.controls = false;
    videoControls.classList.remove('hidden');
}