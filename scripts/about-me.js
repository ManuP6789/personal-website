document.addEventListener("DOMContentLoaded", function() {
    const tuftsLink = document.getElementById("tufts-link");
    const overlay = document.querySelector(".about-left-section-overlay");

    tuftsLink.addEventListener('mouseover', function() {
        console.log('Mouseover event triggered');
        overlay.classList.add('overlay-transition');
    });

    tuftsLink.addEventListener('mouseout', function() {
        console.log('Mousout event triggered');
        overlay.classList.remove('overlay-transition');
    });
});
// need to fix this 