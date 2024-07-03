document.addEventListener("DOMContentLoaded", function () {
  const projectImages = document.querySelectorAll(".project-image");
  const overlays = document.querySelectorAll(".overlay");

  projectImages.forEach((image, index) => {
    image.addEventListener("mouseover", function () {
      overlays[index].classList.add("hovered");
    });

    image.addEventListener("mouseout", function () {
      overlays[index].classList.remove("hovered");
    });
  });
});

document
  .getElementById("face-design-img")
  .addEventListener("click", function () {
    window.location.href = "https://github.com/ManuP6789/Face-Generator-Collab";
  });

document
  .getElementById("personal-website-img")
  .addEventListener("click", function () {
    window.location.href = "https://manuelpenam.com/";
  });

document.getElementById("freebites-img").addEventListener("click", function () {
  window.location.href =
    "https://www.linkedin.com/company/freebitestufts/about/";
});
