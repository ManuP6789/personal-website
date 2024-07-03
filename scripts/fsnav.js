document.addEventListener("DOMContentLoaded", function () {
  const navCloseElement = document.querySelector(".fsnav-close");
  const navOpenElement = document.querySelector(".menu-button");
  const bodyElement = document.querySelector(".body");
  const fsNav = document.querySelector(".fsnav");

  navCloseElement.addEventListener("click", function () {
    fsNav.classList.remove("fsnav--open");
    bodyElement.classList.remove("stop-scrolling");
  });

  navOpenElement.addEventListener("click", function () {
    fsNav.classList.add("fsnav--open");
    bodyElement.classList.add("stop-scrolling");
  });

  // Event listeners for anchor links in the navigation
  fsNav.querySelectorAll('a.fsnav-link[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Close the navigation
      fsNav.classList.remove("fsnav--open");
      bodyElement.classList.remove("stop-scrolling");

      // Scroll to the target section
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

document.querySelectorAll(".fsnav-link").forEach((link) => {
  link.addEventListener("mouseover", function () {
    const imageId = this.getAttribute("data-image-id");
    if (imageId) {
      const image = document.getElementById(imageId);
      document.querySelectorAll(".fsnav-background-img").forEach((img) => {
        img.classList.remove("visible");
        img.style.display = "none"; // Reset all images
      });
      if (image) {
        image.style.display = "block";
        image.style.filter = "brightness(25%)";
        image.classList.add("visible");
      }
    }
  });

  link.addEventListener("mouseout", function () {
    const imageId = this.getAttribute("data-image-id");
    if (imageId) {
      const image = document.getElementById(imageId);
      if (image) {
        image.style.filter = "brightness(0%)";
        setTimeout(function () {
          image.classList.remove("visible");
        }, 200);
      }
    }
  });
});
