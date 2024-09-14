/**
 * @Author: Manuel Pena
 * @Date:   2024-09-14 10:35:30
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-09-14 10:58:59
 */
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const video = document.getElementById("myVideo");

  const videoPromise = new Promise((resolve) => {
    video.onloadeddata = resolve;
  });

  Promise.all([imagePromise, videoPromise]).then(() => {
    preloader.classList.add("visible"); // Hide preloader
  });
});
