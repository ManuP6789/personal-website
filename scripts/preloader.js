/**
 * @Author: Manuel Pena
 * @Date:   2024-09-14 10:35:30
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-09-14 11:04:52
 */
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById("preloader");
  const video = document.getElementById("myVideo");

  const videoPromise = new Promise((resolve) => {
    if (video.readyState >= 3) {
      // 3 is HAVE_FUTURE_DATA, meaning data is available
      resolve();
    } else {
      video.onloadeddata = resolve;
    }
  });

  Promise.all([videoPromise]).then(() => {
    preloader.classList.add("hidden"); // Hide preloader
  });
});
