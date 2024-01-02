document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    const videoPause = document.querySelector(".video-pause-button");
    const pauseImage = document.querySelector(".pause-image");
    const playImage = document.querySelector(".play-image");


    videoPause.addEventListener("click", function(){
        if (video.paused) {
            video.play();
            pauseImage.classList.remove('image-hide');
            playImage.classList.add('image-hide');
        } else {
            video.pause();
            pauseImage.classList.add('image-hide');
            playImage.classList.remove('image-hide');
        }
    })
})

document.getElementById('logo-img').addEventListener('click', function() {
    window.location.href = 'https://manuelpenam.com/';})